import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
type CardProps = {
  cardImage: string;
  cardName: string;
  cardStatus: string;
  cardLink: string;
};

export default function Card({
  cardImage,
  cardName,
  cardStatus,
  cardLink,
}: CardProps) {
  return (
    <div className="portfolio-card rounded-xl ">
      <div className=" mb-4 bg-whitenpm p-8 rounded-xl">
        <Image
          src={cardImage}
          alt={cardName}
          width={1024}
          height={1024}
          className="card-image rounded-xl"
        />
      </div>
      <div className="flex items-center justify-between px-4">
        <div className="card-content ">
          <h2 className="card-name pb-2 text-2xl font-semibold text-terinary selection:bg-terinary selection:text-background">
            {cardName}
          </h2>
          <p
            className={`card-status rounded-full px-4 py-2 text-background font-bold w-fit text-xs ${
              cardStatus === 'Active'
                ? 'bg-green'
                : cardStatus === 'Expired'
                ? 'bg-red'
                : cardStatus === 'Development'
                ? 'bg-blue'
                : ''
            }`}
          >
            {cardStatus}
          </p>
        </div>
        <Link
          href={cardLink}
          className="card-cta text-terinary font-bold rounded-full px-6 py-2 border-2 hover:text-terinary hover:border-terinary"
        >
          {'-->'}
        </Link>
      </div>
    </div>
  );
}
