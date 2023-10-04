import Link from 'next/link';
import Image from 'next/image';
import Logo from './logo';
export default function Navigation() {
  return (
    <div className=" bg-primary">
      <Logo />
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
      </ul>
    </div>
  );
}
