import React from 'react';
import Spline from '@splinetool/react-spline';

interface PricingCardProps {
  type: string;
  price: string;
  features: string[];
  splineScene: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ type, price, features, splineScene }: PricingCardProps) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-green-300">
        <div className="px-4 py-6">
          <h2 className="text-lg font-semibold mb-2">{type}</h2>
          <p className="text-2xl font-bold mb-2">{price}</p>
          <ul className="text-gray-600">
            {features.map((feature, index) => (
              <li key={index} className="mb-1">{feature}</li>
            ))}
          </ul>
          <Spline scene={splineScene} />
          <button className="w-full px-4 py-2 mt-4 bg-emerald-500 text-white font-semibold rounded-md hover:bg-orange-400">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;