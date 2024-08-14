import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Travel',
  description: '...',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Header />
        <main className='relative overflow-hidden'>{children}</main>
        {/*<Footer />*/}
      </body>
    </html>
  );
};

export default RootLayout;
