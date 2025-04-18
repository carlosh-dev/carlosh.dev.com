import './reset.css';

import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Footer from 'components/home/_components/footer';
import Navbar from 'components/home/_components/navbar/nav-bar';

// const popppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] });
const robotoMono = Roboto_Mono({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Carlos Henrique',
  description: 'Keep coding. Keep learning.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} relative h-full min-h-[100dvh] w-screen bg-cover`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
