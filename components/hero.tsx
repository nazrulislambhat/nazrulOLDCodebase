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
    <div className="relative bg-primary border-terinary flex flex-col xl:flex-row items-center justify-between">
      <div className="w-screen py-24 xl:w-[70%] xl:py-12">
        <h1
          className={`${silk.className} text-[36px] lg:text-[40px] max-w-[80%] relative left-[10%] z-9 xl:text-[48px] text-secondary pb-2 sm:pb-2 xl:pb-2 selection:bg-secondary selection:text-primary`}
        >
          Full Stack Engineer
        </h1>

        <p
          className={`${instrument.className} text-base text-lighterGrey max-w-[70%] relative left-[10%] z-9  selection:bg-secondary selection:text-primary`}
        >
          I have a passion for developing comprehensive and scalable full-stack
          products that deliver outstanding user experiences.
        </p>
      </div>

      <div className="image w-[100%] xl:w-[30%] flex justify-center py-24 xl:py-12 bg-secondary">
        <Image
          src={logoSrc}
          alt="Nazrul Islam Photo"
          width={512}
          height={512}
          className="z-5 relative xl:right-[50%] w-[384px] h-[384px] xl:w-[512px] xl:h-[512px]"
        />
      </div>
    </div>
  );
}
