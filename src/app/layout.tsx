import './reset.css';

import Footer from '@/components/Footer';
import { Poppins, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Navbar from '@/components/navbar/Navbar';
// const popppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] });
const robotoMono = Roboto_Mono({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Carlos Henrique',
  description: 'Keep coding. Keep learning.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} relative h-full min-h-[100dvh] w-screen bg-zinc-950 bg-cover`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
