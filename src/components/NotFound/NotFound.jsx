import React from 'react';
import imagenCarouselIzq from "../../assets/image/imagenCarouselIzq.png";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-black text-white">
      
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest text-orange-500">404</h1>
        <p className="text-xl md:text-2xl font-semibold mt-4">Oops! Page Not Found</p>
        <p className="mt-2 text-gray-400 text-center">The page you are looking for does not exist.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-2 text-lg font-medium bg-orange-500 rounded-full shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>

     
      <div className="flex justify-center items-center bg-black">
        <img
          src={imagenCarouselIzq}
          alt="img notfound"
          className=" sm:w-3/4 md:w-96 "
        />
      </div>
    </div>
  );
};

export default NotFound;