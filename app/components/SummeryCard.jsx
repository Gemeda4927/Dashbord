import React from 'react';

function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <p className="text-3xl font-semibold text-purple-600">+ $164,455.00</p>
        <p className="text-gray-500">Income</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <p className="text-3xl font-semibold text-red-600">- $21,790.00</p>
        <p className="text-gray-500">Outcome</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <p className="text-3xl font-semibold text-green-600">$142,665.00</p>
        <p className="text-gray-500">Total Balance</p>
      </div>
    </div>
  );
}

export default SummaryCards;