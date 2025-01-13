import React from 'react';

const ResponsiveCard = ({ imageUrl }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-md">
      <div className="relative">
        {/* Background image */}
        <div className="h-40 bg-gray-200"></div>

        {/* Image of the man */}
        <img
          src={imageUrl}
          alt="Man"
          className="absolute w-24 h-24 rounded-full border-4 border-white -bottom-12 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="pt-16 pb-4 px-6">
        <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="px-6 pb-4">
        <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ResponsiveCard;