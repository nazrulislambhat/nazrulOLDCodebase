import Image from 'next/image';
import Link from 'next/link';
import logoSrc from '../public/logo5transparent.webp';

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Image
        src={logoSrc}
        alt="logo"
        width={512}
        height={512}
        className="rounded-full cursor-pointer w-[64px] h-[64px]"
      />
    </Link>
  );
}
