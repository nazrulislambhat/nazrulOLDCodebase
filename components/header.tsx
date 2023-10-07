import Logo from './logo';
import Nav from './nav';
export default function Header() {
  return (
    <header className="flex items-center justify-between px-[20%] py-8 text-center">
      <Logo />
      <Nav />
    </header>
  );
}
