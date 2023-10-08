'use client';
import Image from 'next/image';
import logoSrc from '../public/logo5transparent.webp';
import Nav from './nav';
import Link from 'next/link';
import { Silkscreen } from 'next/font/google';

const silk = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header className="flex justify-between relative items-center bg-primary px-12 xl:px-24 2xl:px-56">
      <div className="logo  items-center bg-primary  py-4">
        <Link href="/" passHref>
          <p
            className={`${silk.className} text-4xl text-bg-gradient`}
          >
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
