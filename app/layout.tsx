import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';

import './assets/styles/globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aroostook',
  description: 'Aroostook for now',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${GeistSans.className}`}>{children}</body>
    </html>
  );
}
