import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MangaReader = () => {
  const location = useLocation();
  const selectedManga = location.state;
  const [isNew, setIsNew] = useState(true);
  const [isOn, setIsOn] = useState(false);
  const [comments, setComments] = useState([
    "¡Este capítulo estuvo increíble!",
    "Me encantó la parte donde el personaje principal...",
    "No entiendo el final, ¿alguien puede explicarlo?",
  ]);
  const navigate = useNavigate();
  const handleClickMangas = () => {
    navigate("/mangas");
  };

  const CommentModal = () => {
    // Array de comentarios guardados

    const showModal = () => {
      const textA = (comments) => {
        console.log(comments);
        return `
    <div>
  <h3>Comments previus:</h3>
  <ul style="max-height: 200px; overflow-y: auto; color: white;">
    ${comments.map((com) => `<li>${com}</li>`).join("")}
  </ul>
  <textarea
    placeholder="Escribe aquí tu comentario..."
    id="new-comment"
    rows="4"
    style="width: 100%; color: white; background-color: #333; border: 1px solid #444;"
  ></textarea>
</div>
    `;
      };

      Swal.fire({
        title: "Comments for this chapter",
        background: "#000000",
        textColor: "#fff",
        html: textA(comments),
        showCancelButton: true,
        confirmButtonText: "send",
        cancelButtonText: "Cancel",
        preConfirm: () => {
          const newComment = document.getElementById("new-comment").value;
          if (!newComment) {
            Swal.showValidationMessage("Please enter a comment.");
            return false;
          }
          return newComment;
        },
      }).then((result) => {
        if (result.isConfirmed) {
          setComments([...comments, result.value]);
        }
      });
    };
    showModal();
  };

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

  const toggleSwitch = () => {
    setIsOn(!isOn);
    setIsNew(!isNew);
  };
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="flex justify-center items-center bg-gray-900 min-h-screen">
      <div className="mt-20 bg-white p-6 rounded-lg shadow-lg justify-items-center max-w-3xl w-full">
        <div className="w-full mt-6 lg:w-2/3 flex justify-around  space-x-4">
          {/* Botón Regresar */}
          <button
            onClick={goBack}
            className={`px-2 py-2 border justify-between font-semibold rounded-lg shadow-md transition-colors ${
              isOn
                ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            }`}
          >
            ← Back
          </button>

          {/* Botón de Comment */}
          <button
            onClick={() => CommentModal()}
            className={`px-10 py-2 border font-semibold rounded-lg shadow-md justify-between transition-colors ${
              isOn
                ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            }`}
          >
            Comment
          </button>

          {/* Botón de redireccion a mangas */}
          <button
            onClick={() => handleClickMangas()}
            className={`px-2 py-2 border font-semibold rounded-lg shadow-md transition-colors ${
              isOn
                ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            }`}
          >
            Mangas
          </button>
        </div>

        {/* Título del capítulo */}
        <h2 className="text-2xl font-semibold text-center py-4 text-gray-800 mb-4">
          {selectedManga.title}
        </h2>

        {/* Controles de navegación */}
        <div className="flex justify-evenly items-center mb-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-orange-500 text-white font-bold rounded-full transition-all hover:bg-orange-400 disabled:bg-gray-400 mr-4"
          >
            Prev
          </button>
          <span className="text-lg font-medium text-orange-500">
            Page {currentPage + 1} of {pages.length}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === pages.length - 1}
            className="px-4 py-2 bg-orange-500 text-white font-bold rounded-full transition-all hover:bg-orange-400 disabled:bg-gray-400 ml-4"
          >
            Next
          </button>
        </div>

        {/* Imagen de la página actual */}
        <div className="relative bg-black rounded-lg overflow-hidden p-6 shadow-lg">
          <img
            src={pages[currentPage]}
            alt={`Page ${currentPage + 1}`}
            className="w-full h-auto max-w-[600px] mx-auto"
          />
        </div>
 
        {/* Controles de navegación */}
        <div className="flex justify-evenly py-5 items-center mb-4">
  <button
    onClick={handlePrevPage}
    disabled={currentPage === 0}
    className="px-4 py-2 bg-orange-500 text-white font-bold rounded-full transition-all hover:bg-orange-400 disabled:bg-gray-400 mr-4"
  >
    Prev
  </button>
  <span className="text-lg font-medium text-orange-500">
    Page {currentPage + 1} of {pages.length}
  </span>
  <button
    onClick={() => {
      handleNextPage();
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazar hacia arriba con un desplazamiento suave
    }}
    disabled={currentPage === pages.length - 1}
    className="px-4 py-2 bg-orange-500 text-white font-bold rounded-full transition-all hover:bg-orange-400 disabled:bg-gray-400 ml-4"
  >
    Next
  </button>
</div>
      </div>
    </div>
  );
};

export default MangaReader;
