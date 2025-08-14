import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 relative">
            {/* Logo */}
            <div className="flex items-center space-x-2 absolute left-4">
              <Link to="/" className="text-4xl font-bold text-[#074F6C] hover:text-[#0a5f7a] transition-colors duration-300">
                Wefsolution
              </Link>
            </div>

            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Link
                  to="/"
                  className={`transition-all duration-300 relative group ${
                    isActive('/') 
                      ? 'text-[#074F6C] font-semibold' 
                      : 'text-[#074F6C] hover:text-[#0a5f7a]'
                  }`}
                >
                  Inicio
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#074F6C] transition-all duration-300 ${
                    isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
                <Link
                  to="/servicios"
                  className={`transition-all duration-300 relative group ${
                    isActive('/servicios') 
                      ? 'text-[#074F6C] font-semibold' 
                      : 'text-[#074F6C] hover:text-[#0a5f7a]'
                  }`}
                >
                  Servicios
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#074F6C] transition-all duration-300 ${
                    isActive('/servicios') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
                <Link
                  to="/acerca-de"
                  className={`transition-all duration-300 relative group ${
                    isActive('/acerca-de') 
                      ? 'text-[#074F6C] font-semibold' 
                      : 'text-[#074F6C] hover:text-[#0a5f7a]'
                  }`}
                >
                  Acerca de
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#074F6C] transition-all duration-300 ${
                    isActive('/acerca-de') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
                <Link
                  to="/contacto"
                  className={`transition-all duration-300 relative group ${
                    isActive('/contacto') 
                      ? 'text-[#074F6C] font-semibold' 
                      : 'text-[#074F6C] hover:text-[#0a5f7a]'
                  }`}
                >
                  Contacto
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#074F6C] transition-all duration-300 ${
                    isActive('/contacto') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </div>
            </div>

            {/* Desktop Login Button */}
            <div className="hidden md:flex items-center space-x-2 absolute right-4">
              <button className="bg-gradient-to-r from-[#10b981] to-[#10a0b9] text-white px-6 py-2.5 rounded-xl font-medium hover:from-[#074F6C] hover:to-[#074F6C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
                Iniciar Sesión
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center absolute right-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#074F6C] hover:text-[#074F6C] focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md border-t border-gray-200/50">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg transition-all duration-300 relative group ${
                    isActive('/') 
                      ? 'text-[#074F6C] bg-blue-50 font-semibold' 
                      : 'text-[#074F6C] hover:text-[#0a5f7a] hover:bg-blue-50'
                  }`}
                >
                  Inicio
                </Link>
                <Link
                  to="/servicios"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg transition-all duration-300 relative group ${
                    isActive('/servicios') 
                      ? 'text-[#074F6C] bg-blue-50 font-semibold' 
                      : 'text-[#074F6C] hover:text-[#0a5f7a] hover:bg-blue-50'
                  }`}
                >
                  Servicios
                </Link>
                <Link
                  to="/acerca-de"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg transition-all duration-300 relative group ${
                    isActive('/acerca-de') 
                      ? 'text-[#074F6C] bg-blue-50 font-semibold' 
                      : 'text-[#074F6C] hover:text-[#0a5f7a] hover:bg-blue-50'
                  }`}
                >
                  Acerca de
                </Link>
                <Link
                  to="/contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg transition-all duration-300 relative group ${
                    isActive('/contacto') 
                      ? 'text-[#074F6C] bg-blue-50 font-semibold' 
                      : 'text-[#074F6C] hover:text-[#0a5f7a] hover:bg-blue-50'
                  }`}
                >
                  Contacto
                </Link>
                <button className="w-full text-left px-3 py-3 bg-gradient-to-r from-[#10b981] to-[#10b981] text-white rounded-lg hover:from-[#074F6C] hover:to-[#074F6C] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Iniciar Sesión
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};