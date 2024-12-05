import React from "react";
import imgCard from "../img/Background.jpg"

const Card = () => {
    return (
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-lg">
      
        <div className="w-2 bg-orange-500"></div> 
       
        <div className="flex flex-col p-4 flex-grow">
          <h1 className="text-2xl font-bold text-gray-800">Naruto Volume 41</h1>
          <p className="text-orange-500 text-lg">Type</p>
  
          <button className="mt-4 px-4 py-2 bg-green-200 text-green-700 font-semibold rounded-full hover:bg-green-300 transition">
            Read
          </button>
        </div>
  
       
        <div className="w-1/3 flex-shrink-0 relative">
          <img
            src={imgCard} 
            alt="Naruto Volume 41"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>
    );
  };
  
  export default Card;
  