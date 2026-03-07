import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Clapham Collective - Event Management',
  description: 'Manajemen event strategis untuk brand, organisasi, dan komunitas yang ingin menciptakan dampak nyata.',
  icons:{
    icon: [
      {
        url: '/clp-logo.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/clp-logo.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/clp-logo.webp',
        type: 'image/svg+xml',
      },
    ],
    apple: '/clp-logo.webp',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
