// src/pages/About.js

import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Main Content */}
      <main className="container mx-auto py-12">
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-lg text-gray-800">
              Desde nuestra fundación, nos hemos dedicado a transformar la presencia digital de gimnasios con estrategias innovadoras y resultados tangibles.
            </p>
          </div>
        </section>

        <section className="bg-gray-200 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Misión y Visión</h2>
            <p className="text-lg text-gray-800">
              Nuestra misión es ayudar a gimnasios a alcanzar su máximo potencial digital mediante soluciones personalizadas y éticas.
            </p>
            <p className="text-lg text-gray-800 mt-4">
              Nos visualizamos como líderes en el mercado de marketing digital, siendo reconocidos por nuestro compromiso con la excelencia y la innovación.
            </p>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <ul className="list-disc list-inside text-lg text-gray-800">
              <li className="mb-2">Integridad y transparencia en cada interacción.</li>
              <li className="mb-2">Compromiso con resultados excepcionales.</li>
              <li className="mb-2">Creatividad e innovación en nuestras estrategias.</li>
              <li className="mb-2">Colaboración y trabajo en equipo.</li>
              <li className="mb-2">Pasión por el crecimiento de nuestros clientes.</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-200 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Por Qué Elegirnos</h2>
            <p className="text-lg text-gray-800">
              Elegirnos significa confiar en un equipo dedicado y apasionado que trabajará incansablemente para cumplir tus objetivos digitales.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
