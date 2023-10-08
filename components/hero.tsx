import logoSrc from '../public/logo5transparent.webp';
import Image from 'next/image';
import { Instrument_Sans, Silkscreen } from 'next/font/google';

const instrument = Instrument_Sans({ subsets: ['latin'] });

const silk = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <div className="relative bg-darkGrey flex flex-col items-center  py-12 px-12 xl:px-24 xl:py-24 2xl:px-56 2xl:py-24">
      <div className="flex gap-2 flex-col text-center justify-center items-center pb-12 ">
        <h1
          className={`${silk.className} text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-secondary pb-2`}
        >
          Full Stack Engineer
        </h1>

        <p
          className={`${instrument.className} text-lighterGrey text-xs md:text-sm xl:text-base `}
        >
          I have a passion for developing comprehensive and scalable full-stack
          products that deliver outstanding user experiences.
        </p>
      </div>

      <div className="relative w-[70%] xl:w-[512px]  flex justify-center">
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
