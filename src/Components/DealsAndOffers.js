import React from 'react';

const DealsAndOffers = () => {
  const deals = [
    { id: 1, name: 'Smart watches', image: '⌚', discount: '-25%' },
    { id: 2, name: 'Laptops', image: '💻', discount: '-15%' },
    { id: 3, name: 'GoPro cameras', image: '📷', discount: '-40%' },
    { id: 4, name: 'Headphones', image: '🎧', discount: '-25%' },
    { id: 5, name: 'Smartphones', image: '📱', discount: '-25%' },
  ];

  return (
    <section className="container mx-auto mt-4 bg-white border border-gray-200 rounded-lg flex flex-col md:flex-row overflow-hidden">
      {/* Left side - Timer */}
      <div className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-text-dark mb-1">Deals and offers</h3>
        <p className="text-text-gray mb-4">Hygiene equipments</p>
        
        {/* Countdown */}
        <div className="flex gap-2">
          <div className="bg-gray-800 text-white w-12 h-14 flex flex-col items-center justify-center rounded">
            <span className="font-bold text-lg leading-none">04</span>
            <span className="text-[10px] text-gray-300">Days</span>
          </div>
          <div className="bg-gray-800 text-white w-12 h-14 flex flex-col items-center justify-center rounded">
            <span className="font-bold text-lg leading-none">13</span>
            <span className="text-[10px] text-gray-300">Hour</span>
          </div>
          <div className="bg-gray-800 text-white w-12 h-14 flex flex-col items-center justify-center rounded">
            <span className="font-bold text-lg leading-none">34</span>
            <span className="text-[10px] text-gray-300">Min</span>
          </div>
          <div className="bg-gray-800 text-white w-12 h-14 flex flex-col items-center justify-center rounded">
            <span className="font-bold text-lg leading-none">56</span>
            <span className="text-[10px] text-gray-300">Sec</span>
          </div>
        </div>
      </div>

      {/* Right side - Products */}
      <div className="w-full md:w-3/4 flex overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
        {deals.map((deal) => (
          <div key={deal.id} className="min-w-[140px] md:min-w-0 md:flex-1 border-r border-gray-200 p-4 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-gray-100 mb-3 flex items-center justify-center text-4xl rounded-md">
              {deal.image}
            </div>
            <p className="text-sm text-text-dark mb-2 text-center">{deal.name}</p>
            <span className="bg-[#FFE3E3] text-[#EB001B] font-medium px-3 py-1 rounded-full text-sm">
              {deal.discount}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsAndOffers;
