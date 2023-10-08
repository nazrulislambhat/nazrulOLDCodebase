'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { Instrument_Sans, Bai_Jamjuree } from 'next/font/google';

const instrument = Instrument_Sans({ subsets: ['latin'] });
const jam500 = Bai_Jamjuree({ subsets: ['latin'], weight: '500' });
const jam700 = Bai_Jamjuree({ subsets: ['latin'], weight: '700' });

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <button
        className="z-10 relative text-4xl text-secondary  flex items-center justify-center hover:text-lighterGrey "
        onClick={toggleMenu}
      >
        {menuOpen ? <CgClose /> : <CgMenuRight />}
      </button>

      {menuOpen && (
        <div
          className={`${jam500.className} absolute right-0 top-12 w-96 h-fit bg-lighterGrey rounded-lg  overflow-y-hidden overflow-x-hidden z-10`}
        >
          <ul className="flex flex-col text-xl md:text-2xl xl:text-3xl 2xl:text-4xl items-center justify-center z-10 text-primary px-auto py-24">
            <li className="hover:text-secondary hover:bg-primary w-[100%] flex justify-center items-center  cursor-pointer py-2 active:bg-primary active:text-red">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-secondary hover:bg-primary w-[100%] flex justify-center items-center  cursor-pointer py-2 active:bg-primary active:text-red">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-secondary hover:bg-primary w-[100%] flex justify-center items-center  cursor-pointer py-2 active:bg-primary active:text-red">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-secondary hover:bg-primary w-[100%] flex justify-center items-center  cursor-pointer py-2 active:bg-primary active:text-red">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-secondary hover:bg-primary w-[100%] flex justify-center items-center  cursor-pointer py-2 active:bg-primary active:text-red">
              <Link href="/privacy">Privacy</Link>
            </li>
            <li className="hover:text-secondary hover:bg-primary w-[100%] flex justify-center items-center  cursor-pointer py-2 active:bg-primary active:text-red">
              <Link href="/faqs">FAQs</Link>
            </li>

            <li className="hover:text-secondary hover:bg-primary w-[100%] flex justify-center items-center  cursor-pointer py-2 active:bg-primary active:text-red">
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
