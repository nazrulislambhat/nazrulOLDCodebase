'use client';
import Nav from './nav';
import Link from 'next/link';
import { Instrument_Sans, Bai_Jamjuree } from 'next/font/google';

const instrument = Instrument_Sans({ subsets: ['latin'] });
const jam500 = Bai_Jamjuree({ subsets: ['latin'], weight: '500' });
const jam700 = Bai_Jamjuree({ subsets: ['latin'], weight: '700' });

export default function Header() {
  return (
    <header className="flex justify-between relative items-center bg-primary px-12 xl:px-24 2xl:px-56">
      <div className="logo  items-center bg-primary  py-4">
        <Link href="/" passHref>
          <p className={`${jam700.className} text-3xl xl:text-4xl text-bg-gradient`}>
            NAZRUL
          </p>{' '}
        </Link>
      </div>

      <div className="nav">
        <Nav />
      </div>
    </header>
  );
}
