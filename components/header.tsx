'use client';
import Nav2 from './nav2';
import Link from 'next/link';
import { Inter_Tight } from 'next/font/google';

const inter = Inter_Tight({ subsets: ['latin'] });

export default function Header() {
  return (
    <header className="flex border-b-2 border-terinary justify-between relative items-center px-6 py-4 sm:px-8 lg:px-16 xl:px-24 ">
      <div className="logo  items-center">
        <Link href="/" passHref>
          <p
            className={`${inter.className} uppercase font-bold text-3xl xl:text-4xl text-terinary hover:text-primary `}
          >
            NAZ<span className="text-primary hover:text-terinary">RUL</span>
          </p>{' '}
        </Link>
      </div>

      <div className="nav">
        <Nav2 />
      </div>
    </header>
  );
}
