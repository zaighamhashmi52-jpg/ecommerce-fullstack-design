import React from 'react';

const ProductGridSection = ({ title, bgImage, products }) => {
  return (
    <section className="container mx-auto mt-4 bg-white border border-gray-200 rounded-lg flex flex-col md:flex-row overflow-hidden">
      {/* Left side - Banner */}
      <div 
        className="w-full md:w-1/4 p-6 relative flex flex-col justify-between min-h-[250px] md:min-h-[300px]"
        style={{ 
          background: `url(${bgImage}) no-repeat center center`, 
          backgroundSize: 'cover' 
        }}
      >
        {/* Overlay for readability if needed, or rely on image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
        <h3 className="text-xl font-bold text-text-dark relative z-10 w-3/4 leading-snug">
          {title}
        </h3>
        <button className="bg-white text-text-dark font-medium px-4 py-2 rounded shadow self-start relative z-10 hover:bg-gray-50 transition text-sm">
          Source now
        </button>
      </div>

      {/* Right side - 8 Products Grid */}
      <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="border-b border-r border-gray-200 p-4 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-text-dark mb-1">{product.name}</p>
              <p className="text-xs text-text-gray mb-3">From {product.price}</p>
            </div>
            <div className="w-16 h-16 self-end bg-gray-100 flex items-center justify-center text-3xl rounded">
              {product.image}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGridSection;
