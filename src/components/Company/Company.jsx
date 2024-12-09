import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Switch from "react-switch";

const NewPage = () => {
    const [isNew, setIsNew] = useState(true);
    const [isOn, setIsOn] = useState(false);

    const navigate = useNavigate(); 

    const handleRedirect = () => {
        navigate('/manager'); 
    };
   
    const toggleSwitch = () => {
        setIsNew(!isNew);
    };

   
    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            
            <div className="p-8 flex flex-col items-center justify-center md:flex-row md:justify-between md:w-3/4 lg:w-2/3 mt-16">
                
                <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden md:w-44 md:h-44">
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.jodtvkRq6MtN2EGRed5c7gHaEa&pid=Api&P=0&h=180"
                        alt="Logo Toei Animation"
                        className="w-full h-full object-cover"
                    />
                </div>

                
                <div className="flex flex-col items-center mt-4 md:mt-0 md:flex-row md:ml-8">
                    
                    <div className="text-center md:text-left">
                        <p className="text-sm font-semibold text-gray-500 uppercase md:text-lg">
                            Toei Animation
                        </p>
                        <p className="text-base font-medium md:text-xl">Toei Animation</p>
                    </div>

                    
                    <button className="ml-4 mt-2 md:mt-0 p-3 bg-gray-200 hover:bg-gray-300 text-black rounded-lg shadow-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8"
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


          
            <div className="bg-gray-100 px-4 py-2 text-center">
                <p className="text-xs text-gray-500">
                    Toei Animation Co., Ltd is a Japanese animation studio owned
                    by the Toei Company, Limited...
                </p>
            </div>
            <div className="w-full border-t border-gray-300 mb-6 lg:w-2/3"></div>

           
            <div className="flex items-center my-4">
                <p className="text-sm font-medium mr-2">New</p>
                <Switch
                    checked={isNew}
                    onChange={toggleSwitch}
                    onColor="#FF6B2B"
                    offColor="#ccc"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={24}
                    width={48}
                />
                <p className="text-sm font-medium ml-2">Old</p>
            </div>

          
            <div className="grid grid-cols-2 gap-4 w-full px-6 lg:grid-cols-4 lg:w-2/3">
                {[
                    {
                        title: "Komi Can't Communicate",
                        image: "https://tse1.mm.bing.net/th?id=OIP._ptSPRwvptn5nncRm7pnGgHaEQ&pid=Api&P=0&h=180",
                    },
                    { title: "Boruto", image: "https://tse1.mm.bing.net/th?id=OIP._ptSPRwvptn5nncRm7pnGgHaEQ&pid=Api&P=0&h=180" },
                    { title: "Evangelion", image: "https://tse1.mm.bing.net/th?id=OIP._ptSPRwvptn5nncRm7pnGgHaEQ&pid=Api&P=0&h=180" },
                    { title: "Kaguya-sama: Love is War", image: "https://tse1.mm.bing.net/th?id=OIP._ptSPRwvptn5nncRm7pnGgHaEQ&pid=Api&P=0&h=180" },
                ].map((card, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center text-gray-800 font-semibold"
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-32 object-cover rounded-lg mb-2"
                        />
                        <p className="text-sm text-center">{card.title}</p>
                    </div>
                ))}
            </div>

           
            <div className="w-full mt-6 lg:w-2/3">
            <button
                className={`w-full py-2 font-bold rounded-lg shadow-md transition-colors ${isOn ? "bg-green-500 text-white hover:bg-green-600" : "bg-orange-500 text-white hover:bg-orange-600"}`}
                onClick={handleRedirect}
            >
                Manager!
            </button>
        </div>
            
            <div className="w-full mt-6 lg:w-2/3 flex justify-center">
                <button
                    onClick={goBack}
                    className={`px-4 py-2 border font-semibold rounded-lg shadow-md transition-colors ${isNew
                            ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                            : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        }`}
                >
                    ← Back
                </button>
            </div>
        </div>
    );
};

export default NewPage;
