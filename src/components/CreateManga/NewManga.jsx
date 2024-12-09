import React, { useState } from "react";

const NewMangaForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("Manga submitted:", {
      title,
      category,
      coverPhoto,
      description,
    });
    alert("Manga submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-11/12 sm:w-96 lg:w-1/3 bg-white text-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-center text-2xl font-bold mb-6">New Manga</h1>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Insert title"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2 bg-transparent"
          >
            <option value="" disabled hidden>
              Insert category
            </option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Romance">Romance</option>
            <option value="Comedy">Comedy</option>
            <option value="Fantasy">Fantasy</option>
          </select>
          <input
            type="text"
            value={coverPhoto}
            onChange={(e) => setCoverPhoto(e.target.value)}
            placeholder="Insert cover photo"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Insert description"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2 resize-none"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-orange-500 text-white py-2 px-6 rounded-full font-bold text-sm shadow-md hover:bg-orange-600 transition duration-300 w-full"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewMangaForm;
