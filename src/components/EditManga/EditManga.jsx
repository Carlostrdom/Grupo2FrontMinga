import React, { useState } from "react";

const CompManga = () => {
    const [mangaTitle, setMangaTitle] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const handleEdit = () => {
        console.log("Editing manga:", { mangaTitle, description, photo, selectedDate });
        alert("Manga edited successfully!");
    };

    const handleDelete = () => {
        console.log("Deleting manga:", { mangaTitle });
        alert("Manga deleted successfully!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            {/* Form Section */}
            <div className="flex gap-56">
            <div className="w-72 rounded-lg p-6 text-center ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Manga</h2>

                {/* Manga Title Input */}
                <div className="mb-4">
                    <input
                        type="text"
                        value={mangaTitle}
                        onChange={(e) => setMangaTitle(e.target.value)}
                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                        placeholder="title of the manga"
                    />
                </div>

                {/* Description Input */}
                <div className="mb-4">
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                        placeholder="description"
                    />
                </div>

                {/* Photo URL Input */}
                <div className="mb-4">
                    <input
                        type="text"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                        placeholder="photo"
                    />
                </div>

                {/* Select Data */}
                <div className="mb-6">
                    <select
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                    >
                        <option value="">Select a data</option>
                        <option value="2024-12-01">2024-12-01</option>
                        <option value="2024-12-02">2024-12-02</option>
                        <option value="2024-12-03">2024-12-03</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4">
                    <button
                        onClick={handleEdit}
                        className="flex-1 bg-green-500 text-white py-2 rounded-full font-bold text-sm shadow-md hover:bg-green-600 transition duration-300 pt-4 pb-4"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="flex-1 bg-red-100 text-red-500 py-2 rounded-full font-bold text-sm shadow-md hover:bg-red-200 transition duration-300 pt-4 pb-4"
                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* Preview Section */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Chapter #1 - Discover the World</h3>
                <img
                    className="w-72 h-96 "
                    src="https://s3-alpha-sig.figma.com/img/c698/cc3f/21fb3f85f083e6806f525d147a260d5a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZlZIvHXfkR~DQBAYQmN4hGrrfNsNaOqUtlCkkaTgoRnG79-nmRcQ5SnWcA9XPwujPbmGyKxVb1wdzHSMF7GnFMv3I9xqg1adjIG8Nz7JNWEHeiXmITxL1OPjsiJfP3hQ6RUEF8EmuB9nMqEK4Tw8G79~p4NBuZ~uFNwJOws4gUfrDJODqCY26oRBkKOtSMjnn1ztpYY08wgkJeAQUDG~hht8pZTeB1-MssahEw2OvXOojM0X8yCDjmjSwWVfRXLWQy-sTnefTV0ba4bGWuQM4eFivT73hJZUda9jfF8RtuulN6UfIhCx-Sk036hHSKSw3DvKffg9tm2jWqQD9KAmg__"
                    alt="Manga Preview"
                />
            </div>
            </div>
        </div>
    );
};

export default CompManga;
