// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import favinos from '../images/favinos.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={favinos} className="h-12" alt="Logo" />
            <span className="ml-3 text-xl font-bold">Night Raid</span>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link to="/" className="text-sm lg:text-base hover:text-gray-300">Home</Link>
            <Link to="/about" className="text-sm lg:text-base hover:text-gray-300">About</Link>
            <Link to="/services" className="text-sm lg:text-base hover:text-gray-300">Services</Link>
            <Link to="/team" className="text-sm lg:text-base hover:text-gray-300">Team</Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 0H2C0.9 0 0 0.9 0 2v20c0 1.1 0.9 2 2 2h10.7v-8.8H9.5v-3.4h3.2V9.4c0-3.1 1.9-4.7 4.6-4.7 1.3 0 2.4 0.1 2.7 0.1v3.1l-1.9 0c-1.5 0-1.8 0.7-1.8 1.7v2.2h3.6l-0.5 3.4h-3.1V24H22c1.1 0 2-0.9 2-2V2C24 0.9 23.1 0 22 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.6c-0.9 0.4-1.8 0.7-2.8 0.8 1-0.6 1.7-1.5 2.1-2.6-1 0.6-2 1-3.1 1.3-0.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 0.4 0 0.9 0.1 1.3C7.7 8.1 4.1 6.1 1.7 3.1c-0.4 0.6-0.6 1.3-0.6 2 0 1.7 0.9 3.2 2.2 4.1-0.8 0-1.6-0.2-2.3-0.6 0 0 0 0.1 0 0.1 0 2.3 1.6 4.2 3.8 4.6-0.4 0.1-0.9 0.2-1.3 0.2-0.3 0-0.6 0-0.9-0.1 0.6 1.9 2.4 3.3 4.5 3.3-1.7 1.3-3.8 2-6 2-0.4 0-0.7 0-1-0.1 2.1 1.3 4.6 2.1 7.3 2.1 8.8 0 13.7-7.3 13.7-13.7 0-0.2 0-0.4 0-0.6C22.5 6.4 23.4 5.5 24 4.6z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.8 0.1 1.2 0.1 1.9 0.2 2.4 0.4 0.6 0.2 1 0.5 1.5 1 0.5 0.5 0.8 0.9 1 1.5 0.2 0.5 0.3 1.2 0.4 2.4 0.1 1.2 0.1 1.6 0.1 4.8s0 3.6-0.1 4.8c-0.1 1.2-0.2 1.9-0.4 2.4-0.2 0.6-0.5 1-1 1.5-0.5 0.5-0.9 0.8-1.5 1-0.5 0.2-1.2 0.3-2.4 0.4-1.2 0.1-1.6 0.1-4.8 0.1s-3.6 0-4.8-0.1c-1.2-0.1-1.9-0.2-2.4-0.4-0.6-0.2-1-0.5-1.5-1-0.5-0.5-0.8-0.9-1-1.5-0.2-0.5-0.3-1.2-0.4-2.4-0.1-1.2-0.1-1.6-0.1-4.8s0-3.6 0.1-4.8c0.1-1.2 0.2-1.9 0.4-2.4 0.2-0.6 0.5-1 1-1.5 0.5-0.5 0.9-0.8 1.5-1 0.5-0.2 1.2-0.3 2.4-0.4 1.2-0.1 1.6-0.1 4.8-0.1m0-2.2C8.8 0 8.3 0 7.1 0.1 5.9 0.2 5.2 0.4 4.6 0.6 3.9 0.9 3.3 1.3 2.8 1.8 2.3 2.3 1.9 2.7 1.6 3.4 1.4 4 1.2 4.7 1.1 5.9 1 7.1 1 7.6 1 12s0 4.9 0.1 6.1c0.1 1.2 0.3 1.9 0.5 2.4 0.2 0.6 0.5 1.1 1 1.6 0.5 0.5 0.9 0.8 1.5 1 0.5 0.2 1.2 0.3 2.4 0.4 1.2 0.1 1.6 0.1 4.8 0.1s3.6 0 4.8-0.1c1.2-0.1 1.9-0.2 2.4-0.4 0.6-0.2 1.1-0.5 1.6-1 0.5-0.5 0.8-0.9 1-1.5 0.2-0.5 0.3-1.2 0.4-2.4 0.1-1.2 0.1-1.6 0.1-4.8s0-3.6-0.1-4.8c-0.1-1.2-0.2-1.9-0.4-2.4-0.2-0.6-0.5-1.1-1-1.6-0.5-0.5-0.9-0.8-1.5-1-0.5-0.2-1.2-0.3-2.4-0.4-1.2-0.1-1.6-0.1-4.8-0.1S8.8 0 8.8 0M12 5.8C9.2 5.8 7 8 7 10.8s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5m0 8.2c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2m6.4-8.8c-0.4 0-0.8 0.3-0.8 0.8s0.3 0.8 0.8 0.8 0.8-0.3 0.8-0.8-0.3-0.8-0.8-0.8" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5C24 2.2 21.8 0 19 0zM8.3 20.5H4.6V9H8.3V20.5zM6.5 7.5C5.3 7.5 4.3 6.5 4.3 5.3S5.3 3 6.5 3s2.3 1 2.3 2.3C8.8 6.5 7.8 7.5 6.5 7.5zM20.5 20.5h-3.7v-5.5c0-1.3-0.4-2.2-1.4-2.2-0.8 0-1.3 0.5-1.5 1-0.1 0.2-0.1 0.4-0.1 0.6v6.1h-3.7V14c0-1.1 0-2.1 0-3H11c0 0.9 0 1.9 0 3v6.5H7.3v-6.5c0-1.1 0-2.1 0-3H8.4c0 0.9 0 1.9 0 3v6.5h3.7v-6.1c0-1.4 0.7-2.6 2-2.6 1.2 0 1.7 1 1.7 2.4v6.3H20.5z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Desarrollado por AmericoSoft - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
