import React from 'react';

const Separador = ({ text }) => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="w-full border-t border-gray-300"></div>
      {text && <span className="mx-4 text-gray-500">{text}</span>}
      <div className="w-full border-t border-gray-300"></div>
    </div>
  );
};

export default Separador;
