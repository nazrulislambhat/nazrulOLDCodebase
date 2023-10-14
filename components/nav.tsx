'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { Inter_Tight } from 'next/font/google';
import Image from 'next/image';
import linkedinColorIcon from '../public/linkedin-color.svg';
import instagramColorIcon from '../public/instagram-color.svg';
import githubColorIcon from '../public/github-color.svg';
import twitterColorIcon from '../public/twitter-color.svg';
const inter = Inter_Tight({ subsets: ['latin'] });

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <button
        className="z-10 relative text-4xl text-terinary flex items-center justify-center hover:text-primary "
        onClick={toggleMenu}
      >
        {menuOpen ? <CgClose /> : <CgMenuRight />}
      </button>
      {menuOpen && (
        <div
          className={`${inter.className} flex justify-center items-center xl:items-start xl:justify-start flex-col bg-terinary absolute right-0 top-14 h-fit rounded-lg w-[88vw] xl:w-[82vw] overflow-y-hidden overflow-x-hidden z-10`}
        >
          <ul className="relative overflow-hidden xl:left-12 flex flex-col text-2xl md:text-3xl lg:text-4xl xl:text-4xl z-10 text-secondary py-12">
            <li className="hover:text-background hover:underline tracking-wide justify-center xl:justify-start uppercase w-[100%] flex items-center  cursor-pointer py-2 active:text-red">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-background hover:underline tracking-wide justify-center xl:justify-start uppercase w-[100%] flex items-center  cursor-pointer py-2 active:text-red">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-background hover:underline tracking-wide justify-center xl:justify-start uppercase w-[100%] flex items-center  cursor-pointer py-2 active:text-red">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-background hover:underline tracking-wide justify-center xl:justify-start uppercase w-[100%] flex items-center  cursor-pointer py-2 active:text-red">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-background  hover:underline tracking-wide justify-center xl:justify-start uppercase  w-[100%] flex items-center  cursor-pointer py-2 active:text-red">
              <Link href="/privacy">Privacy</Link>
            </li>
            <li className="hover:text-background hover:underline tracking-wide justify-center xl:justify-start uppercase w-[100%] flex items-center  cursor-pointer py-2 active:text-red">
              <Link href="/faqs">FAQs</Link>
            </li>
            <li className="hover:text-background hover:underline tracking-wide justify-center xl:justify-start uppercase w-[100%] flex items-center  cursor-pointer py-2 active:text-red">
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
          <div className="social-links-cta relative flex items-center justify-between bottom-6 right-0 xl:right-12 xl:left-[85%] xl:bottom-12 ">
            <ul className="flex gap-4">
              <li>
                <Link href="https://instagram.com/nazrulislambhat">
                  <Image
                    src={instagramColorIcon}
                    alt="logo"
                    width={512}
                    height={512}
                    className="cursor-pointer w-[30px] h-[30px] hover:scale-110"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/nazrulislambhat">
                  <Image
                    src={linkedinColorIcon}
                    alt="logo"
                    width={512}
                    height={512}
                    className="cursor-pointer w-[30px] h-[30px] hover:scale-110"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/nazrulislambhat">
                  <Image
                    src={twitterColorIcon}
                    alt="logo"
                    width={512}
                    height={512}
                    className="cursor-pointer w-[30px] h-[30px] hover:scale-110"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/nazrulislambhat">
                  <Image
                    src={githubColorIcon}
                    alt="logo"
                    width={512}
                    height={512}
                    className="cursor-pointer w-[30px] h-[30px] hover:scale-110"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
