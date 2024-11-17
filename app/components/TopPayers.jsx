import React from 'react';

function TopProducts() {
  const products = [
    { name: 'ZendQ', category: 'Marketing', revenue: '$375,441.00' },
    { name: 'Dhunter', category: 'AI Development', revenue: '$142,665.00' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-blue-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <h4 className="font-semibold text-xl text-blue-600">{product.name}</h4>
          <p className="text-gray-500">{product.category}</p>
          <p className="font-bold text-2xl text-blue-800">{product.revenue}</p>
        </div>
      ))}
    </div>
  );
}

export default TopProducts;