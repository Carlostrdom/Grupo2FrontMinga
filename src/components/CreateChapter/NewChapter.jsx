import React, { useState } from "react";

const NewCahpterForm = () => {
    const [title, setTitle] = useState("");
    const [order, setOrder] = useState("");
    const [pages, setPages] = useState("");

    const handleSubmit = () => {
        console.log("Manga submitted:", { title, order, pages });
        alert("Manga submitted successfully!");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-80  text-gray-800 rounded-lg  p-6">
                <h1 className="text-center text-xl font-bold mb-6">New Chapter</h1>

                {/* Input Fields */}
                <div className="space-y-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Insert title"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-1"
                    />
                    <input
                        type="text"
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                        placeholder="Insert order"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-1"
                    />
                    <input
                        type="text"
                        value={pages}
                        onChange={(e) => setPages(e.target.value)}
                        placeholder="Insert pages"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-1"
                       
                    ></input>
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="bg-orange-500 text-white py-2 px-8 rounded-full font-bold text-sm shadow-md hover:bg-orange-600 transition duration-300 w-64 mt-5 pt-3 pb-3"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewCahpterForm;
