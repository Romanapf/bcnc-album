import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '📸 BCNC ALBUM',
  description: 'BCNC ALBUM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} container mx-auto py-10 md:py-20 bg-black text-white`}
      >
        {children}
        <div id='modal'></div>
      </body>
    </html>
  )
}
