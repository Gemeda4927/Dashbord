import React from 'react';

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow mb-4">
      <div>
        <h2 className="text-3xl font-semibold text-purple-600">DASDHBORD</h2> {/* Changed font size and color */}
        <p className="text-gray-500">4:45 pm 21 Jul 2023</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-xl cursor-pointer">🔔</span>
        <span className="text-xl cursor-pointer">⚙️</span>
        {/* Uncomment if you want to show user image */}
        {/* <img
          src="/user.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        /> */}
        <div>
          <p className="font-medium">Gemeda T</p>
          <small className="text-gray-500">Admin</small>
        </div>
      </div>
    </div>
  );
}

export default Header;