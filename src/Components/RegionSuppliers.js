import React from 'react';

const RegionSuppliers = () => {
  const regions = [
    { name: 'Arabic Emirates', domain: 'shop.ae', flag: '🇦🇪' },
    { name: 'Australia', domain: 'shop.ae', flag: '🇦🇺' },
    { name: 'United States', domain: 'shop.ae', flag: '🇺🇸' },
    { name: 'Russia', domain: 'shop.ae', flag: '🇷🇺' },
    { name: 'Italy', domain: 'shop.ae', flag: '🇮🇹' },
    { name: 'Denmark', domain: 'shop.ae', flag: '🇩🇰' },
    { name: 'France', domain: 'shop.ae', flag: '🇫🇷' },
    { name: 'Arabic Emirates', domain: 'shop.ae', flag: '🇦🇪' },
    { name: 'China', domain: 'shop.ae', flag: '🇨🇳' },
    { name: 'Great Britain', domain: 'shop.ae', flag: '🇬🇧' },
  ];

  return (
    <section className="container mx-auto mt-8 mb-8">
      <h2 className="text-2xl font-bold text-text-dark mb-6">Suppliers by region</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {regions.map((region, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-3xl">{region.flag}</span>
            <div>
              <p className="text-text-dark font-medium leading-tight">{region.name}</p>
              <p className="text-xs text-text-gray">{region.domain}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegionSuppliers;
