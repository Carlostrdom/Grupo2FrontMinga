import React, { useState } from "react";
import imagenCarouselDerec from "../../assets/image/imagenCarouselDerec.png";

const Manga = () => {
  const [activeTab, setActiveTab] = useState("manga");
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 3;

  const chapters = [
    { number: 1, pages: 169, image: "https://via.placeholder.com/50x50" },
    { number: 2, pages: 403, image: "https://via.placeholder.com/50x50" },
    { number: 3, pages: 78, image: "https://via.placeholder.com/50x50" },
    { number: 4, pages: 201, image: "https://via.placeholder.com/50x50" },
    { number: 5, pages: 50, image: "https://via.placeholder.com/50x50" },
    { number: 6, pages: 120, image: "https://via.placeholder.com/50x50" },
  ];

  const startIndex = (currentPage - 1) * chaptersPerPage;
  const endIndex = startIndex + chaptersPerPage;
  const currentChapters = chapters.slice(startIndex, endIndex);
  const totalPages = Math.ceil(chapters.length / chaptersPerPage);

  const renderTabContent = () => {
    if (activeTab === "manga") {
      return (
        <div className="mt-4 text-gray-700 text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            ligula at quam pulvinar accumsan et eu ex.
          </p>
        </div>
      );
    }
    if (activeTab === "chapters") {
      return (
        <div className="mt-4">
          <div className="space-y-4">
            {currentChapters.map((chapter, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={chapter.image}
                    alt={`Chapter ${chapter.number}`}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-md font-bold text-gray-800">
                      Chapter #{chapter.number}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {chapter.pages} pages
                    </p>
                  </div>
                </div>
                <button className="bg-orange-500 text-white py-1 px-3 rounded-md hover:bg-orange-600 text-sm">
                  Read
                </button>
              </div>
            ))}
          </div>

          {/* Controles de paginación */}
          <div className="flex justify-evenly items-center mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              Previous
            </button>
            <p className="text-xs text-gray-700">
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col md:flex-row">
      {/* Mitad izquierda con imagen */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex-shrink-0">
        <img
          src={imagenCarouselDerec}
          alt="Manga cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mitad derecha con contenido */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-center px-4 py-6 space-y-6">
        {/* Título */}
        <div className="text-center w-full mt-10 md:mt-20">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Naruto: And That's Why You're Disqualified!! #8
          </h1>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <span className="text-red-500 text-xs md:text-sm font-bold bg-red-100 px-2 py-1 rounded-full">
              Shōnen
            </span>
            <p className="text-xs md:text-sm text-gray-600">Company Name</p>
          </div>
        </div>

        {/* Reacciones */}
        <div className="grid grid-cols-4 gap-3">
          {["👍", "👎", "😊", "❤️"].map((reaction, index) => (
            <div
              key={index}
              className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-full flex items-center justify-center shadow-md"
            >
              <span className="text-lg md:text-xl">{reaction}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gray-100 p-4 rounded-lg shadow text-center flex flex-col gap-2 w-full max-w-xs">
          <div className="flex justify-between text-xs md:text-sm">
            <div>
              <h3 className="text-sm md:text-base font-bold text-gray-800">
                4.5/5
              </h3>
              <p className="text-xs md:text-sm text-gray-500">Rating</p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-gray-800">
                265
              </h3>
              <p className="text-xs md:text-sm text-gray-500">Chapters</p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-gray-800">
                Eng
              </h3>
              <p className="text-xs md:text-sm text-gray-500">Language</p>
            </div>
          </div>
        </div>

        {/* Botones de pestañas */}
        <div className="w-full text-center">
          <div className="flex justify-center border-b-2 border-gray-300">
            <button
              onClick={() => setActiveTab("manga")}
              className={`text-sm md:text-base font-bold px-3 py-2 w-1/2 rounded-full ${
                activeTab === "manga"
                  ? "border-b-2 bg-orange-400 border-orange-500 text-white"
                  : "text-gray-700"
              }`}
            >
              Manga
            </button>
            <button
              onClick={() => setActiveTab("chapters")}
              className={`text-sm md:text-base font-bold px-3 py-2 w-1/2 rounded-full ${
                activeTab === "chapters"
                  ? "border-b-2 bg-orange-400 border-orange-500 text-white"
                  : "text-gray-700"
              }`}
            >
              Chapters
            </button>
          </div>
        </div>

        {/* Contenido dinámico basado en la pestaña activa */}
        <div className="w-full h-full overflow-y-auto">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Manga;
