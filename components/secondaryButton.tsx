import { Inter_Tight } from 'next/font/google';
const inter = Inter_Tight({ subsets: ['latin'] });

export default function secondaryButton() {
  return (
    <button
      className={`${inter.className} px-5 py-3.5 rounded-full font-bold text-primary text-base hover:text-terinary `}
    ></button>
  );
}
