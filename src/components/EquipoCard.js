import React from 'react';

const EquipoCard = ({ name, role, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">{name}</h3>
        <p className="text-lg text-gray-700 mb-4">{role}</p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              console.log(`Clic en ver perfil de ${name}`);
              // Aquí puedes agregar la lógica para redirigir o abrir el perfil del equipo
            }}
            className="bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-primary-300 text-lg font-medium rounded-lg px-6 py-3 transition duration-300 inline-block"
          >
            Ver Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipoCard;
