import { Inter_Tight } from 'next/font/google';
const inter = Inter_Tight({ subsets: ['latin'] });

export default function primaryButton() {
  return (
    <button
      className={`${inter.className}  bg-primary px-5 py-3.5 rounded-full font-bold text-secondary text-base border-2  hover:bg-terinary  hover:text-background `}
    ></button>
  );
}
