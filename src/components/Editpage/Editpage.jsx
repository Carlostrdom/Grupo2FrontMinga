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
        <div className='flex gap-44 justify-center items-center mt-20 relative'>
        <div className=" w-72 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Chapter</h2>

         
            <div className="mb-4 mt-12">
                <input
                    type="text"
                    value={mangaName}
                    onChange={(e) => setMangaName(e.target.value)}
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                    placeholder="name of the manga"
                />
            </div>

            {/* Select Chapter */}
            <div className="mb-4">
                <select
                    value={selectedChapter}
                    onChange={(e) => setSelectedChapter(e.target.value)}
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                >
                    <option value="">Select a chapter</option>
                    <option value="1">Chapter 1</option>
                    <option value="2">Chapter 2</option>
                    <option value="3">Chapter 3</option>
                </select>
            </div>

            {/* Select Date */}
            <div className="mb-4">
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

            {/* Data to Edit */}
            <div className="mb-6">

                <input
                    type="text"
                    value={editData}
                    onChange={(e) => setEditData(e.target.value)}
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                    placeholder="data to edit"
                />
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
        <div className="">
        <h3>Chapter #1- Discover the word</h3>
        <img className="w-72 h-96" src="https://s3-alpha-sig.figma.com/img/c698/cc3f/21fb3f85f083e6806f525d147a260d5a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZlZIvHXfkR~DQBAYQmN4hGrrfNsNaOqUtlCkkaTgoRnG79-nmRcQ5SnWcA9XPwujPbmGyKxVb1wdzHSMF7GnFMv3I9xqg1adjIG8Nz7JNWEHeiXmITxL1OPjsiJfP3hQ6RUEF8EmuB9nMqEK4Tw8G79~p4NBuZ~uFNwJOws4gUfrDJODqCY26oRBkKOtSMjnn1ztpYY08wgkJeAQUDG~hht8pZTeB1-MssahEw2OvXOojM0X8yCDjmjSwWVfRXLWQy-sTnefTV0ba4bGWuQM4eFivT73hJZUda9jfF8RtuulN6UfIhCx-Sk036hHSKSw3DvKffg9tm2jWqQD9KAmg__" alt="" />
    </div>
    </div>
    );
};

export default EditPage;


