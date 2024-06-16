// src/pages/Team.js

import React from 'react';

const Team = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Main Content */}
      <main className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Miembro del Equipo 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Nombre del Miembro del Equipo</h2>
            <p className="text-lg">Cargo en la empresa.</p>
          </div>

          {/* Miembro del Equipo 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Nombre del Miembro del Equipo</h2>
            <p className="text-lg">Cargo en la empresa.</p>
          </div>

          {/* Miembro del Equipo 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Nombre del Miembro del Equipo</h2>
            <p className="text-lg">Cargo en la empresa.</p>
          </div>

          {/* Miembro del Equipo 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Nombre del Miembro del Equipo</h2>
            <p className="text-lg">Cargo en la empresa.</p>
          </div>

          {/* Miembro del Equipo 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Nombre del Miembro del Equipo</h2>
            <p className="text-lg">Cargo en la empresa.</p>
          </div>

          {/* Miembro del Equipo 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Nombre del Miembro del Equipo</h2>
            <p className="text-lg">Cargo en la empresa.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Tu Empresa - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Team;
