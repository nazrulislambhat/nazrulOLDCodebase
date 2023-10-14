'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { Inter_Tight } from 'next/font/google';
const inter = Inter_Tight({ subsets: ['latin'] });

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <button
        className="z-10 relative text-4xl text-terinary  flex items-center justify-center hover:text-primary "
        onClick={toggleMenu}
      >
        {menuOpen ? <CgClose /> : <CgMenuRight />}
      </button>

      {menuOpen && (
        <div
          className={`${inter.className} bg-terinary absolute right-0 top-12 w-96 h-fit bg-lighterGrey rounded-lg  overflow-y-hidden overflow-x-hidden z-10`}
        >
          <ul className="flex flex-col text-base md:text-2xl xl:text-2xl 2xl:text-2xl  items-center justify-center z-10 text-background px-auto py-12">
            <li className="hover:text-terinary hover:bg-background tracking-wide  w-[100%] flex justify-center items-center  cursor-pointer py-2 active:text-red">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-terinary hover:bg-background tracking-wide  w-[100%] flex justify-center items-center  cursor-pointer py-2 active:text-red">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-terinary hover:bg-background tracking-wide  w-[100%] flex justify-center items-center  cursor-pointer py-2 active:text-red">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-terinary hover:bg-background tracking-wide  w-[100%] flex justify-center items-center  cursor-pointer py-2 active:text-red">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-terinary hover:bg-background tracking-wide  w-[100%] flex justify-center items-center  cursor-pointer py-2 active:text-red">
              <Link href="/privacy">Privacy</Link>
            </li>
            <li className="hover:text-terinary hover:bg-background tracking-wide  w-[100%] flex justify-center items-center  cursor-pointer py-2 active:text-red">
              <Link href="/faqs">FAQs</Link>
            </li>

            <li className="hover:text-terinary hover:bg-background tracking-wide  w-[100%] flex justify-center items-center  cursor-pointer py-2 active:text-red">
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
