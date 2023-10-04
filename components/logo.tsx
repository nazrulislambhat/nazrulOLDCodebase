import Image from 'next/image';
import Link from 'next/link';
import logoSrc from '../public/logo.svg';

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Image
        src={logoSrc}
        alt="logo"
        width={50}
        height={50}
        className=" fill-white rounded-full bg-white color-red light:color-black dark:color-white"
      />
    </Link>
  );
}
