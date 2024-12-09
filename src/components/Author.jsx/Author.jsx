import React, { useState } from "react";
import bgProfiles from "../../assets/image/bgProfiles.jpg";

const Author = () => {
    const [isNewSelected, setIsNewSelected] = useState(true);
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="min-h-screen p-4 flex flex-col items-center justify-center pt-20 transition-colors duration-300 bg-gray-100">

            {/* Sección del perfil con fondo */}
            <div className="relative w-full flex flex-col items-center justify-center mb-12 lg:w-2/3 lg:max-w-4xl rounded-lg shadow-lg  ">
                <div className="absolute inset-0 hidden md:block">
                    <img
                        src={bgProfiles}
                        alt="Background"
                        className="w-full h-full object-cover rounded-lg md:h-72 lg:h-96 "
                    />
                </div>
                <div className="relative flex flex-row items-center w-full px-4 py-8 text-left md:flex-col md:items-center md:justify-center md:py-12">
                    {/* Imagen del autor */}
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Author Avatar"
                        className="w-28 h-28 rounded-full object-cover border-4 border-white md:w-36 md:h-36 lg:w-44 lg:h-44"
                    />
                    {/* Texto del autor */}
                    <div className="flex-1 mt-4 md:mt-0 md:ml-6">
                        <h1 className="text-lg font-bold text-white  md:text-2xl lg:text-3xl">Lucas Ezequiel Silva</h1>
                        <p className="text-sm text-white flex items-center mt-2 md:text-base">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-2 text-white md:w-6 md:h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>
                            Caseros, Buenos Aires
                        </p>
                        <p className="text-sm text-white flex items-center mt-2 md:text-base">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-2 text-white  md:w-6 md:h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                                />
                            </svg>
                            16/02/2000
                        </p>
                    </div>
                    {/* Botón de editar */}
                    <button className="absolute top-4 right-4 md:static p-2 bg-gray-200 hover:bg-gray-300 text-black rounded-lg shadow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Línea separadora */}
            <div className="w-full border-t border-gray-300 mb-6 lg:w-2/3"></div>

            {/* Toggle personalizado */}
            <div className="w-full flex justify-center items-center mb-6 lg:w-2/3">
                <span className="text-sm font-medium text-gray-600 lg:text-base">new</span>
                <div
                    onClick={toggleSwitch}
                    className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 mx-4 bg-white border-2 ${isOn ? "border-green-500" : "border-orange-500"}`}
                >
                    <div
                        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-7 bg-green-500" : "translate-x-0 bg-orange-500"}`}
                    ></div>
                </div>
                <span className="text-sm font-medium text-gray-600 lg:text-base">old</span>
            </div>

            {/* Cards de mangas */}
            <div className="grid grid-cols-2 gap-4 w-full lg:grid-cols-4 lg:w-2/3">
                {[
                    { title: "Komi san Can't Communicate", img: "https://via.placeholder.com/150" },
                    { title: "Boruto", img: "https://via.placeholder.com/150" },
                    { title: "Evangelion", img: "https://via.placeholder.com/150" },
                    { title: "Kaguya-sama: Love is war", img: "https://via.placeholder.com/150" },
                ].map((manga, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={manga.img}
                            alt={manga.title}
                            className="w-full h-40 object-cover rounded-lg shadow-md lg:h-48"
                        />
                        <p className="text-sm mt-2 text-gray-800 lg:text-base">{manga.title}</p>
                    </div>
                ))}
            </div>

            {/* Botón Manage */}
            <div className="w-full mt-6 lg:w-2/3">
                <button
                    className={`w-full py-2 font-bold rounded-lg shadow-md transition-colors ${isOn ? "bg-green-500 text-white hover:bg-green-600" : "bg-orange-500 text-white hover:bg-orange-600"}`}
                    onClick={() => console.log("Redirigiendo...")}
                >
                    Manage!
                </button>
            </div>

            {/* Botón Regresar */}
            <div className="w-full mt-6 lg:w-2/3 flex justify-center">
                <button
                    onClick={goBack}
                    className={`px-4 py-2 border font-semibold rounded-lg shadow-md transition-colors ${isOn ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white" : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"}`}
                >
                    ← Back
                </button>
            </div>
        </div>
    );
};

export default Author;