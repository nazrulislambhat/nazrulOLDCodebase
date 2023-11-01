import Link from 'next/link';
export default function Wordpress() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl mb-8">About</h1>
      <p className="animate__animated">
        Witness the sheer brilliance of <span>Nazrul Islam</span>. With an
        unparalleled passion for crafting code, they infuse their work with an
        incredible level of <span>creativity</span> that is nothing short of
        awe-inspiring. Every line of code they write reflects a{' '}
        <span>commitment</span>
        to excellence that goes beyond the ordinary. With each deliberate
        keystroke, they embark on a journey to create something{' '}
        <span>xtraordinary</span>, pushing the boundaries of what`s{' '}
        <span>possible</span> in the digital world. bla bla
      </p>
      <Link
        href="/"
        className="border-[1px] border-black  font-bold text-black rounded-lg px-8 py-3 bg-[#DCEDB9] hover:bg-[#F1FFC4]"
      >
        Home
      </Link>
    </div>
  );
}
