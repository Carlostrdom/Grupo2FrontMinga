import React from "react";
import { CiMenuBurger } from "react-icons/ci"; // Importamos el ícono del menú hamburguesa
import logo from "../img/LogoDos.png"
const Header = ({ title, placeholder, backgroundImage }) => {
  return (

    <div
      className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>

      <nav className="absolute  top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black/30">
        {/* Botón de menú hamburguesa */}
        <button className="text-white text-3xl">
          <CiMenuBurger />
        </button>

        {/* Título no me carga la img*/}
        <div className="h-28 w-28">
          <img src= {logo}alt="" />
        </div>

      </nav>

      {/* Contenido principal */}
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        {placeholder && (
          <div className="mt-4">
     
            <input
              type="text"
              placeholder={placeholder}
              className="px-4 py-2 w-1/2 rounded-full border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        )}
      </div>
    </div>
  );
};




export default Header;








