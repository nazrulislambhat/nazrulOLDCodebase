import './globals.css';
import type { Metadata } from 'next';
import { Silkscreen, Instrument_Sans } from 'next/font/google';

const silk = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

const silkBold = Silkscreen({
  weight: '700',
  subsets: ['latin'],
});

const instrument = Instrument_Sans({ subsets: ['latin'] });

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
      <body className={`${instrument.className} bg-lighterGrey`}>{children}</body>
    </html>
  );
}
