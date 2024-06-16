import React, { useState } from 'react';

const ServiceCard = ({ title, description, color, imageUrl }) => {
  const [expanded, setExpanded] = useState(false);

  let textColorClass = '';
  switch (color) {
    case 'green':
      textColorClass = 'text-green-600';
      break;
    case 'purple':
      textColorClass = 'text-purple-600';
      break;
    case 'yellow':
      textColorClass = 'text-yellow-600';
      break;
    case 'red':
      textColorClass = 'text-red-600';
      break;
    default:
      textColorClass = 'text-gray-800';
      break;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
      <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9 mb-4 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover h-full rounded-lg sm:w-3/4 sm:mx-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-4 ${textColorClass}`}>{title}</h3>
      <p className={`text-base md:text-lg text-gray-800 ${expanded ? 'block' : 'truncate'}`}>{description}</p>
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="text-blue-600 hover:text-blue-800 mt-2 focus:outline-none"
        >
          Leer más
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
