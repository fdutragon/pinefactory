'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Loader2, Mail, Copy, Download } from 'lucide-react'

interface PaymentVerificationProps {
  onVerified?: () => void
}

export default function PaymentVerification({ onVerified }: PaymentVerificationProps) {
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [codeReceived, setCodeReceived] = useState(false)

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setVerified(false)
    setEmailSent(false)

    try {
      const response = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          address: address || undefined,
          amount: amount ? parseFloat(amount) : undefined,
          paymentMethod: 'deposit',
        }),
      })

      const data = await response.json()

      if (data.verified) {
        setVerified(true)
        setEmailSent(data.emailSent)
        if (onVerified) {
          onVerified()
        }
      } else {
        setError(data.message || 'Payment not verified. Please ensure payment has been completed and try again.')
      }
    } catch (err) {
      setError('Failed to verify payment. Please try again later.')
      console.error('Verification error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/trumpusdt-reversion.pine'
    link.download = 'TRUMPUSDT-1M-Reversion.pine'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setCodeReceived(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl w-full h-full"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Verify Payment & Get Code
      </h3>

      {!verified ? (
        <form onSubmit={handleVerify} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="your@email.com"
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              We'll send the complete code to this email
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Payment Address (Optional)
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Your Binance deposit address"
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Leave empty to use default payment address
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Payment Amount (Optional)
            </label>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="0.00"
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Expected payment amount (helps with verification)
            </p>
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !email}
            className="w-full px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Verifying Payment...
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                Verify Payment & Send Code
              </>
            )}
          </button>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-700 dark:text-blue-400 text-sm">
              <strong>💡 How it works:</strong> After making your payment, enter your email above and click verify. 
              We'll check your Binance account for the payment and automatically send you the complete code via email.
            </p>
          </div>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div>
                <h4 className="text-lg font-bold text-green-900 dark:text-green-100">
                  Payment Verified!
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Your payment has been confirmed
                </p>
              </div>
            </div>

            {emailSent ? (
              <div className="mt-4">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Code sent to: {email}</span>
                </div>
                <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                  Check your inbox (and spam folder) for the complete Pine Script code.
                </p>
              </div>
            ) : (
              <p className="text-sm text-green-600 dark:text-green-400">
                Sending code to your email...
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Code
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(email)
                alert('Email copied to clipboard!')
              }}
              className="px-5 py-3 bg-transparent text-gray-900 dark:text-white rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 border border-gray-300 dark:border-gray-600"
            >
              <Copy className="w-4 h-4" />
              Copy Email
            </button>
          </div>

          {codeReceived && (
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <p className="text-purple-700 dark:text-purple-300 text-sm">
                ✅ Code downloaded! Check your downloads folder. Don't forget to check your email for installation instructions.
              </p>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}

