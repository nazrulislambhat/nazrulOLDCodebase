import Link from 'next/link';
import Image from 'next/image';
import imageSrc from '../public/home-image.webp';

import { Inter_Tight } from 'next/font/google';
const inter = Inter_Tight({ subsets: ['latin'] });



export default function About() {
  return (
    <div className="relative bg-primary h-fit justify-between gap-12 xl:gap-24 px-6 py-24 sm:px-8 sm:py-24 md:py-30 lg:px-16 lg:py-36 xl:px-24 xl:py-36 flex flex-col xl:flex-row items-center">
      <div className="left bg-secondary rounded-xl">
        <Image
          src={imageSrc}
          alt="logo"
          width={512}
          height={512}
          className="rounded-xl"
        />
      </div>
      <div className="right">
        <h2 className="text-2xl pb-4 xl:pb-6 md:text-3xl lg:text-4xl xl:text-5xl text-background selection:bg-terinary selection:text-background">
          Code that sparks engagement and inspires action
        </h2>
        <p className="text-background pb-6 xl:pb-10 text-sm md:text-sm xl:text-base selection:bg-terinary selection:text-background">
          Over a decade of experience in building products for clients across
          several countries.
        </p>
        <button
          className={`${inter.className} flex items-center gap-2 after:content-['-->'] rounded-full font-bold text-background text-base hover:text-terinary `}
        >
          <Link href="/about">About Me</Link>
        </button>
      </div>
    </div>
  );
}
