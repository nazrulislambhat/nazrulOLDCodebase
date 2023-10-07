import Link from 'next/link';
import { Silkscreen } from 'next/font/google';

const silk = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function Navigation() {
  return (
    <div className={`${silk.className} font-bold text-xl uppercase`}>
      <ul className="flex gap-8 items-center ">
        <li className="bg-lightGrey rounded-full hover:bg-primary hover:text-secondary hover:underline px-6 py-2 cursor-pointer underline-offset-4 active:bg-red active:text-lightGrey">
          <Link href="/about">About</Link>
        </li>
        <li className="bg-lightGrey rounded-full hover:bg-primary hover:text-secondary hover:underline px-6 py-2 cursor-pointer underline-offset-4">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="bg-lightGrey rounded-full hover:bg-primary hover:text-secondary hover:underline px-6 py-2 cursor-pointer underline-offset-4">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="bg-lightGrey rounded-full hover:bg-primary hover:text-secondary hover:underline px-6 py-2 cursor-pointer underline-offset-4">
          <Link href="/privacy">Privacy</Link>
        </li>
      </ul>
    </div>
  );
}
