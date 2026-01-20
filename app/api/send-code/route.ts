import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(apiKey)
}

async function getScriptCode(): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'trumpusdt-reversion.pine')
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return fileContent
  } catch (error) {
    console.error('Error reading script file:', error)
    throw new Error('Failed to read script file')
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, verified, depositInfo } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!verified) {
      return NextResponse.json(
        { error: 'Payment must be verified before sending code' },
        { status: 400 }
      )
    }

    // Get the script code
    const scriptCode = await getScriptCode()

    // Email configuration
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@pinefactory.com'
    const fromName = process.env.RESEND_FROM_NAME || 'PineFactory'

    // Initialize Resend
    const resend = getResend()

    // Send email with code
    const { data, error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [email],
      subject: 'Your TRUMPUSDT Reversion Script - Complete Code',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Pine Script Code</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">🎉 Payment Verified!</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
            <p style="font-size: 16px;">Thank you for your purchase!</p>
            
            <p style="font-size: 16px;">Your payment has been verified and your complete Pine Script code is attached below.</p>
            
            ${depositInfo ? `
              <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p style="margin: 0; font-size: 14px;"><strong>Payment Details:</strong></p>
                <p style="margin: 5px 0; font-size: 14px;">Transaction ID: ${depositInfo.txId || 'N/A'}</p>
                <p style="margin: 5px 0; font-size: 14px;">Amount: ${depositInfo.amount || 'N/A'} ${depositInfo.coin || 'USDT'}</p>
              </div>
            ` : ''}
            
            <div style="background: white; padding: 20px; border-radius: 5px; border: 1px solid #ddd; margin: 20px 0;">
              <h2 style="color: #667eea; margin-top: 0;">📥 Installation Instructions</h2>
              <ol style="padding-left: 20px;">
                <li style="margin-bottom: 10px;">Open TradingView and go to Pine Editor</li>
                <li style="margin-bottom: 10px;">Click "New" to create a new script</li>
                <li style="margin-bottom: 10px;">Copy the code below and paste it into the editor</li>
                <li style="margin-bottom: 10px;">Click "Add to Chart" to apply the strategy</li>
                <li style="margin-bottom: 10px;">Configure your parameters in the strategy settings</li>
                <li style="margin-bottom: 10px;">Enable alerts and connect to your Binance account (optional)</li>
              </ol>
            </div>
            
            <div style="background: #2d3748; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #14F195; margin-top: 0;">📋 Complete Code:</h3>
              <pre style="background: #1a202c; color: #e2e8f0; padding: 15px; border-radius: 5px; overflow-x: auto; font-size: 12px; white-space: pre-wrap; word-wrap: break-word;">${scriptCode}</pre>
            </div>
            
            <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #ffc107;">
              <p style="margin: 0; font-size: 14px;"><strong>⚠️ Important:</strong></p>
              <ul style="margin: 10px 0; padding-left: 20px; font-size: 14px;">
                <li>Keep this email safe - it contains your complete code</li>
                <li>Do not share this code with others</li>
                <li>For support, contact us at ${process.env.SUPPORT_EMAIL || 'support@pinefactory.com'}</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666; font-size: 12px;">Thank you for choosing PineFactory!</p>
              <p style="color: #666; font-size: 12px;">Happy Trading! 🚀</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Payment Verified!

Thank you for your purchase. Your complete Pine Script code is below.

Installation Instructions:
1. Open TradingView and go to Pine Editor
2. Click "New" to create a new script
3. Copy the code below and paste it into the editor
4. Click "Add to Chart" to apply the strategy
5. Configure your parameters in the strategy settings
6. Enable alerts and connect to your Binance account (optional)

Complete Code:
${scriptCode}

Important:
- Keep this email safe - it contains your complete code
- Do not share this code with others
- For support, contact us at ${process.env.SUPPORT_EMAIL || 'support@pinefactory.com'}

Thank you for choosing PineFactory!
Happy Trading! 🚀
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      emailId: data?.id,
    })
  } catch (error) {
    console.error('Send code error:', error)
    return NextResponse.json(
      {
        error: 'Failed to send code',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

