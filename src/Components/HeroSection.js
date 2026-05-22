import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white border border-gray-200 rounded-lg container mx-auto mt-4 p-4 flex flex-col md:flex-row gap-4">
      {/* Left Sidebar - Categories */}
      <div className="w-full md:w-1/5 hidden lg:block">
        <ul className="flex flex-col gap-3 text-text-gray font-medium">
          <li className="px-3 py-2 bg-[#E5F1FF] text-text-dark rounded-md cursor-pointer">Automobiles</li>
          <li className="px-3 py-2 hover:bg-[#E5F1FF] hover:text-text-dark rounded-md cursor-pointer">Clothes and wear</li>
          <li className="px-3 py-2 hover:bg-[#E5F1FF] hover:text-text-dark rounded-md cursor-pointer">Home interiors</li>
          <li className="px-3 py-2 hover:bg-[#E5F1FF] hover:text-text-dark rounded-md cursor-pointer">Computer and tech</li>
          <li className="px-3 py-2 hover:bg-[#E5F1FF] hover:text-text-dark rounded-md cursor-pointer">Tools, equipments</li>
          <li className="px-3 py-2 hover:bg-[#E5F1FF] hover:text-text-dark rounded-md cursor-pointer">Sports and outdoor</li>
          <li className="px-3 py-2 hover:bg-[#E5F1FF] hover:text-text-dark rounded-md cursor-pointer">Animal and pets</li>
          <li className="px-3 py-2 hover:bg-[#E5F1FF] hover:text-text-dark rounded-md cursor-pointer">Machinery tools</li>
          <li className="px-3 py-2 hover:bg-[#E5F1FF] hover:text-text-dark rounded-md cursor-pointer">More category</li>
        </ul>
      </div>

      {/* Center Banner */}
      <div className="w-full lg:w-3/5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg p-10 flex flex-col justify-center text-white relative overflow-hidden h-80 lg:h-auto">
        <div className="relative z-10">
          <h2 className="text-3xl font-light mb-2">Latest trending</h2>
          <h1 className="text-4xl font-bold mb-6">Electronic items</h1>
          <button className="bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-100 transition font-medium w-max">
            Learn more
          </button>
        </div>
        {/* Placeholder for banner image */}
        <div className="absolute top-0 right-0 h-full w-1/2 bg-white/10" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-1/5 flex flex-col gap-4">
        {/* User Card */}
        <div className="bg-[#E3F0FF] rounded-lg p-4 flex flex-col h-1/2 justify-between">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl">
              <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
            </div>
            <div>
              <p className="text-sm">Hi, user</p>
              <p className="text-sm">let's get stated</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-brand-blue text-white w-full py-1.5 rounded text-sm hover:bg-blue-700 transition">Join now</button>
            <button className="bg-white text-brand-blue border border-gray-300 w-full py-1.5 rounded text-sm hover:bg-gray-50 transition">Log in</button>
          </div>
        </div>
        {/* Promo Cards */}
        <div className="bg-[#F38332] text-white rounded-lg p-4 h-1/4 flex flex-col justify-center">
          <p className="text-sm">Get US $10 off with a new supplier</p>
        </div>
        <div className="bg-[#55BDC3] text-white rounded-lg p-4 h-1/4 flex flex-col justify-center">
          <p className="text-sm">Send quotes with supplier preferences</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
