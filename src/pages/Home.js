import React from 'react';
import { Link } from 'react-router-dom';
import Separador from '../components/Separador';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ServiceCard from '../components/ServiceCard';
import EquipoCard from '../components/EquipoCard';
import optimizacionImage from '../images/Jhomar.jpg'; // Importa la imagen optimizacion.jpg desde la carpeta images
import MauImage from '../images/mauri.jpg';
import Slider from 'react-slick';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1990,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto py-6">
        {/* Sección Quiénes Somos */}
        <section className="bg-white py-1 mb-6">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left rounded-lg shadow-lg p-8 lg:p-12">
            <div className="lg:w-1/2 lg:mr-8 mb-6 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Imagen de la agencia"
                className="rounded-lg shadow-lg w-full h-auto lg:max-w-md mx-auto lg:mx-0 transform hover:scale-105 transition duration-300"
                style={{ maxHeight: '300px' }}
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">¿Quiénes Somos?</h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                Somos una agencia especializada en marketing digital para gimnasios, comprometidos en ayudarte a alcanzar tus objetivos a través de estrategias efectivas y personalizadas.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link
                  to="/about"
                  className="bg-primary-700 text-black hover:bg-primary-800 focus:ring-2 focus:ring-primary-300 text-lg font-medium rounded-lg px-6 py-3 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <span className="flex items-center">
                    Saber más
                  </span>
                </Link>
                <a
                  href="https://wa.me/63919683"
                  className="bg-primary-100 text-primary-700 hover:bg-primary-200 focus:ring-2 focus:ring-primary-300 text-lg font-medium rounded-lg px-6 py-3 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <span className="flex items-center">
                    Contactar
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Separador text="" />

        {/* Sección Servicios */}
        <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Descubre Nuestros Servicios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
              <ServiceCard
                title="Gestión de Redes Sociales"
                description="Maximiza el engagement y aumenta tu presencia en redes sociales con nuestra gestión estratégica."
                color="green"
                imageUrl="https://img.icons8.com/?size=160&id=MQiz3TkEm0h6&format=png"
              />
              <ServiceCard
                title="Publicidad Online"
                description="Campañas efectivas para atraer nuevos clientes y aumentar tus ventas online."
                color="red"
                imageUrl="https://img.icons8.com/?size=96&id=12381&format=png"
              />
              <ServiceCard
                title="Consultoría Estratégica"
                description="Asesoramiento personalizado para potenciar tu estrategia digital y alcanzar tus objetivos."
                color="green"
                imageUrl="https://img.icons8.com/?size=160&id=SYfQ2j9TS2Hq&format=png"
              />
              {/* Añade más ServiceCard según sea necesario */}
            </div>
          </div>
        </section>

        {/* Sección Equipo */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nuestro Equipo</h2>
            <Slider {...settings}>
              <div className="px-2">
                <EquipoCard
                  name="NJhomar Pezo"
                  role="Sub Gerente general de las gerencias"
                  imageUrl={optimizacionImage}
                />
              </div>
              <div className="px-2">
                <EquipoCard
                  name="Mau del grupo doble aa"
                  role="Director ejecutivo de sueños"
                  imageUrl={MauImage}
                />
              </div>
              <div className="px-2">
                <EquipoCard
                  name="Americo alvarez"
                  role="Director directivo de directrices"
                  imageUrl="https://scontent.flpb1-2.fna.fbcdn.net/v/t1.6435-9/42524086_161419328120172_99275287123984384_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r5TOplYtRKcQ7kNvgFJ3hlv&_nc_ht=scontent.flpb1-2.fna&oh=00_AYAaOv7s92LpyN1SN_QBL-foSovXiOUhkZsaqVpnTrnl2Q&oe=66969C9A"
                />
              </div>
              {/* Añade más EquipoCard según sea necesario */}
            </Slider>
          </div>
        </section>
      </main>

      <ScrollToTopButton />
    </div>
  );
}

export default Home;
