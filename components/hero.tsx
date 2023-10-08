import logoSrc from '../public/logo5transparent.webp';
import Image from 'next/image';
import { Instrument_Sans, Bai_Jamjuree } from 'next/font/google';

const instrument = Instrument_Sans({ subsets: ['latin'] });
const jam500 = Bai_Jamjuree({ subsets: ['latin'], weight: '500' });
const jam700 = Bai_Jamjuree({ subsets: ['latin'], weight: '700' });

export default function Hero() {
  return (
    <div className="relative bg-primary flex flex-col xl:flex-col text-center overflow-hidden items-center justify-between pt-24 px-12 xl:px-24 xl:pt-24 2xl:px-56 2xl:pt-24">
      <div className="flex gap-2 flex-col justify-center xl:max-w-[60%] pb-12">
        <h1
          className={`${jam500.className} text-4xl md:text-5xl font-bold xl:text-6xl 2xl:text-6xl text-secondary pb-2 selection:bg-secondary selection:text-primary`}
        >
          Full Stack Engineer.
        </h1>

        <p
          className={`${instrument.className} text-lighterGrey xl:max-w-[90%] text-xs md:text-sm xl:text-base selection:bg-secondary selection:text-primary`}
        >
          I have a passion for developing comprehensive and scalable full-stack
          products that deliver outstanding user experiences.
        </p>
      </div>

      <div className="relative  w-[70%] xl:w-[512px]  flex justify-center">
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
