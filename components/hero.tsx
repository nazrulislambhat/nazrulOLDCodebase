import logoSrc from '../public/logo5transparent.webp';
import Image from 'next/image';
import { Instrument_Sans, Silkscreen } from 'next/font/google';
import Link from 'next/link';
const instrument = Instrument_Sans({ subsets: ['latin'] });

const silk = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <div className="relative bg-primary flex flex-col items-center">
      <div className="flex gap-2 flex-col text-center justify-center items-center py-12 px-12 xl:px-24 xl:py-24 2xl:px-56 2xl:py-24 ">
        <h1
          className={`${silk.className} text-[2.5rem] md:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] text-secondary`}
        >
          Full Stack Engineer
        </h1>

        <p
          className={`${instrument.className} text-lighterGrey text-[.9em] md:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] `}
        >
          I have a passion for developing comprehensive and scalable full-stack
          products that deliver outstanding user experiences.
        </p>
      </div>

      <div className="relative w-[70%] xl:w-[100vw]  flex justify-center ">
        <Image
          src={logoSrc}
          alt="Nazrul Islam Photo"
          width={512}
          height={512}
          className="relative z-6"
        />
      </div>
    </div>
  );
}
