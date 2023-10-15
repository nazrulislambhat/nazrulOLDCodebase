import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';

import { Inter_Tight } from 'next/font/google';
const inter = Inter_Tight({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nazrul Islam - Full Stack Engineer | Software Developer',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
