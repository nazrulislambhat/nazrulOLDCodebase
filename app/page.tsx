import About from '@/components/about';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Portfolio from '@/components/portfolio';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Portfolio />
    </main>
  );
}
