'use client';
import Link from 'next/link';
import Image from 'next/image';
import imageSrc from '../public/home-image.webp';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { Inter_Tight } from 'next/font/google';
const inter = Inter_Tight({ subsets: ['latin'] });

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ type: 'tween', duration: 2 }}
      className={`relative rounded-xl border-2 border-terinary my-4 bg-secondary h-fit justify-between gap-12 xl:gap-24 px-6 py-24 sm:px-8 sm:py-24 md:py-30 lg:px-16 lg:py-36 xl:px-24 xl:py-36 flex flex-col xl:flex-row items-center overflow-hidden`}
    >
      <div className="left bg-primary rounded-xl">
        <Image
          src={imageSrc}
          alt="logo"
          width={512}
          height={512}
          className="rounded-xl"
        />
      </div>
      <div className="right">
        <h2 className="text-2xl pb-4 xl:pb-6 md:text-3xl lg:text-4xl xl:text-5xl text-terinary selection:bg-terinary selection:text-background">
          Code that sparks engagement and inspires action
        </h2>
        <p className="text-terinary pb-6 xl:pb-10 text-sm md:text-sm xl:text-base selection:bg-terinary selection:text-background">
          Over a decade of experience in building products for clients across
          several countries.
        </p>
        <button
          className={`${inter.className} flex items-center gap-2 after:content-['-->'] font-bold text-primary text-base hover:text-terinary hover:border-b-2 border-terinary`}
        >
          <Link href="/about">About Me</Link>
        </button>
      </div>
    </motion.div>
  );
}
