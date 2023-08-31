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
      <body className={`${inter.className} w-screen h-screen bg-purple-50 dark:bg-zinc-900 bg-cover bg-[url('../assets/images/backgrounds/background-sunset.jpg')] animation`}>
        {/* <div className='relative z-[-1] '>
          <span className='z-[-1] absolute w-[1200px]	h-[1200px] border-2	border-dashed rounded-full top-0 bottom-0 left-0 right-0 m-auto opacity-10 animate-spin-slow duration-75' />
          <span className='z-[-1] absolute w-[1000px]	h-[1000px] border-2	border-dashed rounded-full top-0 bottom-0 left-0 right-0 m-auto opacity-10 animate-spin-slow duration-75' />
        </div> */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
