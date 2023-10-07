'use client';
import Link from 'next/link';
import { Silkscreen } from 'next/font/google';
import { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';

const silk = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <button
        className="z-10 relative text-4xl text-secondary xl:text-terinary flex items-center justify-center hover:text-lighterGrey xl:hover:text-primary"
        onClick={toggleMenu}
      >
        {menuOpen ? <CgClose /> : <CgMenuRight />}
      </button>

      {menuOpen && (
        <div
          className={`${silk.className} absolute right-0  w-96 h-fit bg-secondary xl:bg-white  overflow-y-hidden overflow-x-hidden z-10`}
        >
          <ul className="flex gap-2 flex-col items-center justify-center py-4 z-10 text-primary xl:text-terinary space-y-4">
            <li className="  hover:text-red max-w-fit  cursor-pointer underline-offset-4 active:bg-red active:text-lightGrey">
              <Link href="/">Home</Link>
            </li>
            <li className="  hover:text-red max-w-fit cursor-pointer underline-offset-4 active:bg-red active:text-lightGrey">
              <Link href="/about">About</Link>
            </li>
            <li className="  hover:text-red max-w-fit cursor-pointer underline-offset-4 active:bg-red active:text-lightGrey">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="  hover:text-red max-w-fit cursor-pointer underline-offset-4 active:bg-red active:text-lightGrey">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="  hover:text-red max-w-fit cursor-pointer underline-offset-4 active:bg-red active:text-lightGrey">
              <Link href="/privacy">Privacy</Link>
            </li>
            <li className="  hover:text-red max-w-fit cursor-pointer underline-offset-4 active:bg-red active:text-lightGrey">
              <Link href="/faqs">FAQs</Link>
            </li>
            <li className="  hover:text-red max-w-fit cursor-pointer underline-offset-4 active:bg-red active:text-lightGrey">
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
