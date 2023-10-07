'use client';
import Logo from './logo';
import Nav from './nav';
export default function Header() {
  return (
    <header className="flex justify-between px-4 py-6 sm:px-6 sm:py-8 xl:px-8 xl:py-10  items-center bg-primary">
      <Logo />
      <Nav />
    </header>
  );
}
