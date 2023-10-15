import React from 'react';

import portfolioOne from '../public/1.jpg';
import portfolioThree from '../public/3.jpg';
import portfolioFive from '../public/5.jpg';
import portfolioSix from '../public/6.jpg';
import portfolioEight from '../public/8.jpg';

import PortfolioCard from './portfolioCard';
export default function Portfolio() {
  return (
    <section>
      <div className="portfolio rounded-xl px-6 py-24 sm:px-8 sm:py-24 md:py-30 lg:px-16 lg:py-36 xl:px-24 xl:py-36">
        <h1 className="portfolio-title pb-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-terinary font-bold selection:bg-terinary selection:text-background">
          Explore my most recent creations
        </h1>
        <div className="portfolio-cards grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
          <div className="col-span-1">
            <PortfolioCard
              cardImage={portfolioEight as any}
              cardName="Mehandi by Sana"
              cardStatus="Active"
              cardLink="https://mehandibysana.com/"
            />
          </div>

          <div className="col-span-1">
            <PortfolioCard
              cardImage={portfolioThree as any}
              cardName="Nazrul Islam"
              cardStatus="Development"
              cardLink="https://nazrulislam.dev/"
            />
          </div>

          <div className="col-span-2 md:col-span-2">
            <PortfolioCard
              cardImage={portfolioFive as any}
              cardName="FossNoobs"
              cardStatus="Active"
              cardLink="https://fossnoobs.com/"
            />
          </div>

          <div className="col-span-1">
            <PortfolioCard
              cardImage={portfolioSix as any}
              cardName="IFED Trust"
              cardStatus="Active"
              cardLink="https://ifedtrust.com/"
            />
          </div>
          <div className="col-span-1">
            <PortfolioCard
              cardImage={portfolioOne as any}
              cardName="Get Your Rentals"
              cardStatus="Expired"
              cardLink="https://getyourrentals.com/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
