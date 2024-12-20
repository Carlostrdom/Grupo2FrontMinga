import React, { useState } from 'react';

const EditPage = () => {
    const [mangaName, setMangaName] = useState('');
    const [selectedChapter, setSelectedChapter] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [editData, setEditData] = useState('');

    const handleEdit = () => {
        console.log('Editing chapter:', { mangaName, selectedChapter, selectedDate, editData });
        alert('Chapter edited successfully!');
    };

    const handleDelete = () => {
        console.log('Deleting chapter:', { mangaName, selectedChapter });
        alert('Chapter deleted successfully!');
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            <div className="flex flex-col md:flex-row gap-52 items-center md:items-start">
               
                <form className="w-full max-w-[90%] sm:max-w-lg md:max-w-2x1 bg-white rounded-lg p-8 shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Edit Chapter</h2>

                    <div className="mb-4">
                        <input
                            type="text"
                            value={mangaName}
                            onChange={(e) => setMangaName(e.target.value)}
                            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-2"
                            placeholder="Name of the manga"
                        />
                    </div>

                    <div className="mb-4">
                        <select
                            value={selectedChapter}
                            onChange={(e) => setSelectedChapter(e.target.value)}
                            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-2"
                        >
                            <option value="">Select a chapter</option>
                            <option value="1">Chapter 1</option>
                            <option value="2">Chapter 2</option>
                            <option value="3">Chapter 3</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <select
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-2"
                        >
                            <option value="">Select a date</option>
                            <option value="2024-12-01">2024-12-01</option>
                            <option value="2024-12-02">2024-12-02</option>
                            <option value="2024-12-03">2024-12-03</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <input
                            type="text"
                            value={editData}
                            onChange={(e) => setEditData(e.target.value)}
                            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-2"
                            placeholder="Data to edit"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={handleEdit}
                            type="button"
                            className="bg-green-500 text-white py-3 rounded-lg font-bold text-sm shadow-md hover:bg-green-600 transition duration-300"
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            type="button"
                            className="bg-red-100 text-red-500 py-3 rounded-lg font-bold text-sm shadow-md hover:bg-red-200 transition duration-300"
                        >
                            Delete
                        </button>
                    </div>
                </form>

            
                <div className="hidden md:block">
                    <h3 className="w-[18rem] text-lg font-semibold mb-4 text-center">Chapter #1 - Discover the world</h3>
                    <img
                        className="w-96 h-auto rounded-lg shadow-lg"
                        src="https://s3-alpha-sig.figma.com/img/c698/cc3f/21fb3f85f083e6806f525d147a260d5a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZlZIvHXfkR~DQBAYQmN4hGrrfNsNaOqUtlCkkaTgoRnG79-nmRcQ5SnWcA9XPwujPbmGyKxVb1wdzHSMF7GnFMv3I9xqg1adjIG8Nz7JNWEHeiXmITxL1OPjsiJfP3hQ6RUEF8EmuB9nMqEK4Tw8G79~p4NBuZ~uFNwJOws4gUfrDJODqCY26oRBkKOtSMjnn1ztpYY08wgkJeAQUDG~hht8pZTeB1-MssahEw2OvXOojM0X8yCDjmjSwWVfRXLWQy-sTnefTV0ba4bGWuQM4eFivT73hJZUda9jfF8RtuulN6UfIhCx-Sk036hHSKSw3DvKffg9tm2jWqQD9KAmg__"
                        alt="Manga"
                    />
                </div>
            </div>
        </div>
    );
};

export default EditPage;
