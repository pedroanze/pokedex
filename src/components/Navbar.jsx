import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/logo.png"; // Asegúrate de que este archivo exista en la ruta indicada

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#f5db13] top-0 start-0 w-full fixed z-40 shadow-md">
      <nav className="flex flex-wrap justify-between items-center py-3 lg:py-6 px-6 md:px-10">
        {/* Logo e ícono izquierdo */}
        <div className="h-12 flex items-center space-x-2">
          <img
            src={Logo}
            alt="Pokédex Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Botón de menú para móvil */}
        <div
          id="menu-button"
          className="text-black text-4xl font-bold md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <FiMenu />
        </div>

        {/* Lista de navegación */}
        <div
          id="menu-open"
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto animate-fade-down animate-duration-500`}
        >
          <ul className="font-medium text-sm lg:text-lg text-black flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* Enlace 1 */}
            <li>
              <a
                href="/"
                className="px-5 lg:py-3 py-2 rounded-lg shadow-sm inline-flex justify-center items-center text-center transition duration-500 hover:scale-110"
                style={{ backgroundColor: "#72d576" }}
              >
                Pokédex
              </a>
            </li>
            {/* Enlace 2 */}
            <li>
              <a
                href="/pokedex"
                className="px-5 lg:py-3 py-2 rounded-lg shadow-sm inline-flex justify-center items-center text-center transition duration-500 hover:scale-110"
                style={{ backgroundColor: "#f2b807" }}
              >
                Repositorio
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
