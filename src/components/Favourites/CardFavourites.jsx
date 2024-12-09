import React from "react";
import { CgAdd } from "react-icons/cg";
import { LuCircleSlash } from "react-icons/lu";

const CardFavourites = () => {
  // Hardcoded manga data
  const mangas = [
    {
      title: "Manga Title 1",
      genre: "Action",
      typeColor: "text-blue-500",
      borderColor: "border-blue-500",
      cover_photo: "https://via.placeholder.com/150",
    },
    {
      title: "Manga Title 2",
      genre: "Adventure",
      typeColor: "text-red-500",
      borderColor: "border-red-500",
      cover_photo: "https://via.placeholder.com/150",
    },
    {
      title: "Manga Title 3",
      genre: "Fantasy",
      typeColor: "text-green-500",
      borderColor: "border-green-500",
      cover_photo: "https://via.placeholder.com/150",
    },
    {
      title: "Manga Title 4",
      genre: "Romance",
      typeColor: "text-purple-500",
      borderColor: "border-purple-500",
      cover_photo: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="relative -mt-12 px-8">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-[90%] mx-auto relative z-10">
        <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start md:ml-44">
          <button className="px-4 py-2 rounded-lg bg-gray-900 text-white">All</button>
          <button className="px-4 py-2 rounded-lg bg-red-200 text-gray-700">Shonen</button>
          <button className="px-4 py-2 rounded-lg bg-yellow-200 text-gray-700">Seinen</button>
          <button className="px-4 py-2 rounded-lg bg-green-200 text-gray-700">Shojo</button>
          <button className="px-4 py-2 rounded-lg bg-purple-200 text-gray-700">Kodomo</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {mangas.map((manga, index) => (
            <div
              key={index}
              className={`w-[90%] md:w-[402px] h-[178px] bg-white shadow-md rounded-lg flex overflow-hidden border-l-4 ${manga.borderColor} relative`}
            >
              <div className="absolute top-2 left-2 flex gap-1">
                <CgAdd className="text-gray-700 w-5 h-5" />
                <LuCircleSlash className="text-red-500 w-5 h-5" />
              </div>

              <div className="flex-1 p-4 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-800">{manga.title}</h3>
                <p className="text-sm text-gray-500">{manga.genre}</p>
                <p className={`text-sm ${manga.typeColor}`}>Type</p>
              </div>

              <div className="flex gap-2 absolute bottom-2 left-2">
                <button className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full">
                  Editar
                </button>
                <button className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">
                  Delete
                </button>
              </div>

              <div className="w-1/3 h-full overflow-hidden relative">
                <img
                  src={manga.cover_photo}
                  alt={manga.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-l-full rounded-r-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardFavourites;


