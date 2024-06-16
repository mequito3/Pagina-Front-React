import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import favinos from '../images/favinos.png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={favinos} className="h-12" alt="Flowbite Logo" />
            <span className="text-xl font-bold">Night Raid</span>
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-400 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Always visible navigation for large screens */}
          <nav className="hidden lg:flex space-x-4">
            <Link
              to="/"
              className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300"
            >
              Services
            </Link>
            <Link
              to="/team"
              className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300"
            >
              Team
            </Link>
          </nav>
        </div>
      </div>

      {/* Toggle Menu Content for small screens */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 py-2.5">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/team"
                className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300"
                onClick={closeMenu}
              >
                Team
              </Link>
            </nav>
            <button
              onClick={closeMenu}
              className="bg-gray-700 text-white w-full py-2 mt-2 rounded-lg text-sm lg:text-base hover:bg-gray-600 focus:outline-none"
            >
              Cerrar Menú
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
