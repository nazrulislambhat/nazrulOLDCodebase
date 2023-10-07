'use client';
import Image from 'next/image';
import logoSrc from '../public/logo5transparent.webp';
import Nav from './nav';
export default function Header() {
  return (
    <header className="min-w-screen flex boxed mx-auto justify-between px-4 py-6 sm:px-4 sm:py-6 lg:px-6 lg:py-8 xl:px-32 xl:py-4 2xl:px-32 2xl:py-4  items-center bg-primary">
      <div className="logo">
        <Image
          src={logoSrc}
          alt="logo"
          width={512}
          height={512}
          className="cursor-pointer rounded-full min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px]  border-2 border-lightGrey"
        />
      </div>

      <Nav />
    </header>
  );
}
