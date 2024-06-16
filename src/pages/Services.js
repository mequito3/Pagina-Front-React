// src/pages/Services.js

import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    

      {/* Main Content */}
      <main className="container mx-auto py-12">
        {/* Sección Optimización SEO */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Optimización SEO</h2>
            <p className="text-lg text-gray-800">
              Mejora la visibilidad de tu gimnasio en los motores de búsqueda con nuestras estrategias SEO efectivas.
            </p>
          </div>
        </section>

        {/* Sección Gestión de Redes Sociales */}
        <section className="bg-gray-200 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Gestión de Redes Sociales</h2>
            <p className="text-lg text-gray-800">
              Administramos y optimizamos tus redes sociales para aumentar el engagement con tu audiencia.
            </p>
          </div>
        </section>

        {/* Sección Publicidad Online */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Publicidad Online</h2>
            <p className="text-lg text-gray-800">
              Crea campañas publicitarias efectivas para atraer nuevos clientes y potenciar tu gimnasio.
            </p>
          </div>
        </section>

        {/* Sección Diseño y Desarrollo Web */}
        <section className="bg-gray-200 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Diseño y Desarrollo Web</h2>
            <p className="text-lg text-gray-800">
              Diseñamos y desarrollamos sitios web modernos y funcionales para promover tu gimnasio en línea.
            </p>
          </div>
        </section>

        {/* Sección Consultoría Estratégica */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Consultoría Estratégica</h2>
            <p className="text-lg text-gray-800">
              Ofrecemos consultoría personalizada para desarrollar estrategias digitales que impulsen el crecimiento de tu gimnasio.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Tu Empresa - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Services;
