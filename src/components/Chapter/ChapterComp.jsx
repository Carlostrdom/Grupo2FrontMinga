import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MangaReader = () => {
  const location = useLocation();
  const selectedManga = location.state;
  console.log(location, "location este es");

  console.log(selectedManga, "selectedManga asdawad");

  const [currentPage, setCurrentPage] = useState(0);

  if (!selectedManga || !selectedManga.pages)
    return (
      <div className="text-center text-xl">
        No pages found for this chapter.
      </div>
    );

  const pages = selectedManga.pages;

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="flex justify-center items-center bg-gray-900 min-h-screen">
      <div className="mt-20 bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        {/* Título del capítulo */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          {selectedManga.title}
        </h2>

        {/* Controles de navegación */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full transition-all hover:bg-blue-700 disabled:bg-gray-400"
          >
            Prev
          </button>
          <span className="text-lg font-medium text-gray-800">
            Page {currentPage + 1} of {pages.length}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === pages.length - 1}
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full transition-all hover:bg-blue-700 disabled:bg-gray-400"
          >
            Next
          </button>
        </div>

        {/* Imagen de la página actual */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
          <img
            src={pages[currentPage]}
            alt={`Page ${currentPage + 1}`}
            className="w-full h-auto max-w-[600px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MangaReader;
