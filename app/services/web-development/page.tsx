import Link from 'next/link';
export default function Wordpress() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl mb-8">Web Development Development</h1>
      <Link
        href="/"
        className="border-[1px] border-black  font-bold text-black rounded-lg px-8 py-3 bg-[#DCEDB9] hover:bg-[#F1FFC4]"
      >
        Home
      </Link>
    </div>
  );
}
