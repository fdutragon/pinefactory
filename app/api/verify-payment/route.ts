import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// Type definitions
interface BinanceBalance {
  asset: string
  free: string
  locked: string
}

interface BinanceAccount {
  balances: BinanceBalance[]
}

// Binance API configuration
const BINANCE_API_KEY = process.env.BINANCE_API_KEY || ''
const BINANCE_SECRET_KEY = process.env.BINANCE_SECRET_KEY || ''
const BINANCE_BASE_URL = 'https://api.binance.com'

// Payment configuration
const PAYMENT_ADDRESS = process.env.BINANCE_PAYMENT_ADDRESS || ''
const PAYMENT_AMOUNT = parseFloat(process.env.PAYMENT_AMOUNT || '0')
const PAYMENT_SYMBOL = process.env.PAYMENT_SYMBOL || 'USDT'

interface BinanceDeposit {
  amount: string
  coin: string
  network: string
  status: number // 0: pending, 1: success
  txId: string
  insertTime: number
  address: string
}

// Verify payment using Binance API
async function verifyBinancePayment(address: string, amount: number, symbol: string) {
  try {
    const timestamp = Date.now()
    const queryString = `timestamp=${timestamp}`
    const signature = crypto
      .createHmac('sha256', BINANCE_SECRET_KEY)
      .update(queryString)
      .digest('hex')

    // Get deposit history
    const response = await fetch(
      `${BINANCE_BASE_URL}/sapi/v1/capital/deposit/hisrec?${queryString}&signature=${signature}`,
      {
        headers: {
          'X-MBX-APIKEY': BINANCE_API_KEY,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Binance API error: ${response.statusText}`)
    }

    const deposits: BinanceDeposit[] = await response.json()

    // Filter deposits matching our criteria
    const matchingDeposits = deposits.filter((deposit) => {
      const depositAmount = parseFloat(deposit.amount)
      const isMatchingAddress = deposit.address.toLowerCase() === address.toLowerCase()
      const isMatchingSymbol = deposit.coin === symbol
      const isMatchingAmount = Math.abs(depositAmount - amount) < 0.01 // Allow small difference
      const isConfirmed = deposit.status === 1 // 1 = success

      return isMatchingAddress && isMatchingSymbol && isMatchingAmount && isConfirmed
    })

    // Check for recent deposits (last 24 hours)
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000
    const recentDeposits = matchingDeposits.filter(
      (deposit) => deposit.insertTime >= oneDayAgo
    )

    return {
      verified: recentDeposits.length > 0,
      deposits: recentDeposits,
      latestDeposit: recentDeposits[0] || null,
    }
  } catch (error) {
    console.error('Error verifying Binance payment:', error)
    return {
      verified: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// Alternative: Verify using account balance (simpler but less precise)
async function verifyByBalance(address: string, expectedAmount: number) {
  try {
    const timestamp = Date.now()
    const queryString = `timestamp=${timestamp}`
    const signature = crypto
      .createHmac('sha256', BINANCE_SECRET_KEY)
      .update(queryString)
      .digest('hex')

    // Get account balance
    const response = await fetch(
      `${BINANCE_BASE_URL}/api/v3/account?${queryString}&signature=${signature}`,
      {
        headers: {
          'X-MBX-APIKEY': BINANCE_API_KEY,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Binance API error: ${response.statusText}`)
    }

    const account: BinanceAccount = await response.json()
    const usdtBalance = account.balances.find(
      (b) => b.asset === PAYMENT_SYMBOL
    )

    if (!usdtBalance) {
      return { verified: false, error: 'USDT balance not found' }
    }

    const balance = parseFloat(usdtBalance.free)
    // Check if balance increased by expected amount (simplified check)
    return {
      verified: balance >= expectedAmount,
      currentBalance: balance,
    }
  } catch (error) {
    console.error('Error checking balance:', error)
    return {
      verified: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, address, amount, paymentMethod } = body

    if (!email || !address) {
      return NextResponse.json(
        { error: 'Email and address are required' },
        { status: 400 }
      )
    }

    // Verify payment based on method
    let verificationResult

    if (paymentMethod === 'deposit') {
      verificationResult = await verifyBinancePayment(
        address || PAYMENT_ADDRESS,
        amount || PAYMENT_AMOUNT,
        PAYMENT_SYMBOL
      )
    } else {
      // Fallback to balance check
      verificationResult = await verifyByBalance(
        address || PAYMENT_ADDRESS,
        amount || PAYMENT_AMOUNT
      )
    }

    if (!verificationResult.verified) {
      return NextResponse.json(
        {
          verified: false,
          message: 'Payment not verified. Please ensure payment has been completed.',
          error: verificationResult.error,
        },
        { status: 200 }
      )
    }

    // Payment verified - send email with code
    const depositInfo = 'latestDeposit' in verificationResult 
      ? verificationResult.latestDeposit 
      : 'currentBalance' in verificationResult
      ? { balance: verificationResult.currentBalance }
      : verificationResult

    const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/send-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        verified: true,
        depositInfo,
      }),
    })

    const emailResult = await emailResponse.json()

    const depositInfoResponse = 'latestDeposit' in verificationResult 
      ? verificationResult.latestDeposit 
      : 'currentBalance' in verificationResult
      ? { balance: verificationResult.currentBalance }
      : verificationResult

    return NextResponse.json({
      verified: true,
      message: 'Payment verified! Check your email for the complete code.',
      emailSent: emailResult.success,
      depositInfo: depositInfoResponse,
    })
  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      {
        error: 'Failed to verify payment',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

