import React from 'react';

const ExtraServices = () => {
  const services = [
    {
      title: 'Source from Industry Hubs',
      image: 'https://via.placeholder.com/300x120',
      icon: '🏭',
    },
    {
      title: 'Customize Your Products',
      image: 'https://via.placeholder.com/300x120',
      icon: '⚙️',
    },
    {
      title: 'Fast, reliable shipping by ocean or air',
      image: 'https://via.placeholder.com/300x120',
      icon: '✈️',
    },
    {
      title: 'Product monitoring and inspection',
      image: 'https://via.placeholder.com/300x120',
      icon: '🛡️',
    },
  ];

  return (
    <section className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-text-dark mb-6">Our extra services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden relative group">
            <div className="h-32 bg-gray-200">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:opacity-90 transition"
              />
            </div>
            
            {/* Icon Badge */}
            <div className="absolute top-24 right-4 w-12 h-12 bg-white rounded-full border-4 border-white shadow-sm flex items-center justify-center text-xl bg-[#E5F1FF]">
              {service.icon}
            </div>

            <div className="p-4 pt-6">
              <h3 className="font-medium text-text-dark pr-12">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraServices;
