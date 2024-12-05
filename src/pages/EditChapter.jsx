import React from "react";
import imagenManga from "../assets/image/SignInFoto.jpg"; // Asegúrate de tener la imagen en esta ruta

const EditChapterForm = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Formulario */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-6 py-12">
                <form className="w-full max-w-md space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">
                        Edit Chapter
                    </h2>

                    {/* Campo: Nombre del manga */}
                    <div>
                        <label
                            htmlFor="mangaName"
                            className="block text-sm text-gray-700 relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-400 after:mt-1"
                        >
                            Name of the manga
                        </label>
                        {/* <select
              id="mangaName"
              className="w-full mt-2 bg-transparent border-none focus:ring-0 focus:outline-none"
            >
              <option value="">Select manga</option>
              <option value="Naruto">Naruto</option>
              <option value="Dragon Ball">Dragon Ball</option>
            </select> */}
                    </div>

                    {/* Campo: Selección de capítulo */}
                    <div>
                        <label
                            htmlFor="chapter"
                            className="block text-sm text-gray-700 relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-400 after:mt-1"
                        >
                            Select chapter
                        </label>
                        {/* <select
              id="chapter"
              className="w-full mt-2 bg-transparent border-none focus:ring-0 focus:outline-none"
            >
              <option value="">Select chapter</option>
              <option value="1">Chapter 1</option>
              <option value="2">Chapter 2</option>
            </select> */}
                    </div>

                    {/* Campo: Fecha */}
                    <div>
                        <label
                            htmlFor="date"
                            className="block text-sm text-gray-700 relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-400 after:mt-1"
                        >
                            Select date
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="w-full mt-2 bg-transparent border-none focus:ring-0 focus:outline-none"
                        />
                    </div>

                    {/* Botones */}
                    <div className="flex gap-4 mt-6 justify-center">
                        <button
                            type="button"
                            className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-200"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="bg-red-200 text-red-700 py-2 px-6 rounded-full hover:bg-red-300 transition duration-200"
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>

            {/* Imagen del capítulo */}
            <div className="hidden md:block w-full md:w-1/2 bg-white flex items-center justify-center p-12">
                <div className="text-center">
                    <img
                        src={imagenManga}
                        alt="Naruto Manga Cover"
                        className="w-64 mx-auto"
                    />
                    <h3 className="text-xl font-semibold mt-4">
                        Chapter #1 - Discover the word
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default EditChapterForm;
