import linkedinColorIcon from '../public/linkedin-color.svg';
import instagramColorIcon from '../public/instagram-color.svg';
import githubColorIcon from '../public/github-color.svg';
import twitterColorIcon from '../public/twitter-color.svg';
import linkedinBlackIcon from '../public/linkedin-black.svg';
import instagramBlackIcon from '../public/instagram-black.svg';
import githubBlackIcon from '../public/github-black.svg';
import twitterBlackIcon from '../public/twitter-black.svg';
import Image from 'next/image';
import Link from 'next/link';

import { Inter_Tight } from 'next/font/google';

const inter = Inter_Tight({ subsets: ['latin'] });

export default function Hero() {
  return (
    <div className="relative border-b-2 border-terinary h-fit flex flex-col  px-6 py-24 sm:px-8 sm:py-24 md:py-30 lg:px-16 lg:py-36 xl:px-24 xl:py-36">
      <div className=" pb-20 xl:pb-24 relative">
        <h1
          className={`${inter.className} font-bold leading-10 max-w-[90%] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-terinary selection:bg-terinary selection:text-background`}
        >
          I`m a Full Stack Engineer who`s dedicated to crafting
          <span className="text-primary selection:bg-primary selection:text-background">
            {' '}
            outstanding software solutions.
          </span>
        </h1>

        <p
          className={`${inter.className} absolute right-0 bottom-6 text-terinary xl:max-w-[50%]  text-sm md:text-sm xl:text-lg selection:bg-terinary selection:text-background `}
        >
          I have a passion for developing comprehensive and scalable full-stack
          products that deliver outstanding user experiences.
        </p>
      </div>

      <div className="social-links-cta relative flex items-center mt-4 justify-between">
        <ul className="flex gap-4">
          <li>
            <Link href="https://instagram.com/nazrulislambhat">
              <Image
                src={instagramBlackIcon}
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
                src={linkedinBlackIcon}
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
                src={twitterBlackIcon}
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
                src={githubBlackIcon}
                alt="logo"
                width={512}
                height={512}
                className="cursor-pointer w-[30px] h-[30px] hover:scale-110"
              />
            </Link>
          </li>
        </ul>
        <button
          className={`${inter.className} flex items-center gap-2 after:content-['-->'] bg-primary px-5 py-3.5 rounded-full font-bold text-background text-base border-2  hover:bg-terinary  hover:text-background `}
        >
          <Link href="/connect">Let`s Connect</Link>
        </button>
      </div>
    </div>
  );
}
