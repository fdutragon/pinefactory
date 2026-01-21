import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeScript } from '@/components/theme-script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PineFactory - Professional Pine Script Scripts for TradingView',
  description: 'Discover high-quality Pine Script scripts for TradingView. Automate your trading strategies and maximize your profits.',
  keywords: 'Pine Script, TradingView, Trading, Indicators, Strategies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="pinefactory-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

