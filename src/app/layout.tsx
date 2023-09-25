import './globals.css'
import './reset.css'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carlos Henrique',
  description: 'Keep learning. Keep growing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen bg-purple-50 dark:bg-zinc-900 bg-cover animation`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
