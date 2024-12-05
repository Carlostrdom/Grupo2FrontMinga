import React from "react";


const ImagenHeader = () => {
  return(
 
  < div className="text-center" >
    <h1 className="text-white text-4xl font-bold">{title}</h1>
    {
      placeholder && (
        <div className="mt-4">
          <input
            type="text"
            placeholder={placeholder}
            className="px-4 py-2 w-1/2 rounded-full border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      )
    }
  </div >
  );
};
export { ImagenHeader };