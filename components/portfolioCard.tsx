import React from 'react';
import Image from 'next/image';
type CardProps = {
  image: string;
  name: string;
  status: string;
  ctaLink: string;
};

const Card: React.FC<CardProps> = ({ image, name, status, ctaLink }) => {
  return (
    <div className="card">
      <Image
        src={image}
        alt={name}
        width={512}
        height={512}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <p className="card-status">{status}</p>
      </div>
      <a href={ctaLink} className="card-cta">
        Learn More
      </a>
    </div>
  );
};

export default Card;
