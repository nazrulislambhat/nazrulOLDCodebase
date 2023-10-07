'use client';
import Image from 'next/image';
import logoSrc from '../public/logo5transparent.webp';
import Nav from './nav';
export default function Header() {
  return (
    <header className="flex boxed mx-auto justify-between px-4 py-6 sm:px-6 sm:py-8 xl:px-6 xl:py-8 2xl:px-8 2xl:py-10  items-center bg-primary">
      <div className="logo">
        <Image
          src={logoSrc}
          alt="logo"
          width={512}
          height={512}
          className="cursor-pointer rounded-full w-[64px] h-[64px] border-2 border-lightGrey"
        />
      </div>

      <Nav />
    </header>
  );
}
