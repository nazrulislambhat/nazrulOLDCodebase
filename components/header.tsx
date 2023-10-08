'use client';
import Image from 'next/image';
import logoSrc from '../public/logo5transparent.webp';
import Nav from './nav';
export default function Header() {
  return (
    <header className="flex justify-between relative items-center bg-primary px-12 xl:px-24 2xl:px-56">
      <div className="logo  items-center bg-primary  py-4">
        <Image
          src={logoSrc}
          alt="logo"
          width={512}
          height={512}
          className="cursor-pointer bg-primary rounded-full p-[2px] min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px]  border-2 border-lighterGrey hover:bg-red "
        />
      </div>

      <div className="nav">
        <Nav />
      </div>
    </header>
  );
}
