import React from 'react';

function Sidebar() {
  return (
    <div className="flex flex-col w-20 bg-gray-900 text-white h-screen p-4 space-y-6">
      {/* Replace each emoji with icons or SVGs as needed */}
      <div className="text-xl cursor-pointer">🏠</div>
      <div className="text-xl cursor-pointer">📊</div>
      <div className="text-xl cursor-pointer">📑</div>
      <div className="text-xl cursor-pointer">🔔</div>
      <div className="text-xl cursor-pointer">⚙️</div>
    </div>
  );
}

export default Sidebar;
