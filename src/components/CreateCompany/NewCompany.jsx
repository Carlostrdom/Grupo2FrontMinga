import React, { useState } from "react";

const NewCompanyForm = () => {
    const [nameCompany, setNameCompany] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [profileImage, setProfileImage] = useState("");

    const handleSubmit = () => {
        console.log("Chapter submitted:", { nameCompany, description, website, profileImage });
        alert("Chapter submitted successfully!");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white w-11/12 sm:w-96 lg:w-1/3 text-gray-800 rounded-lg shadow-lg p-6">
                {/* Header */}
                <h1 className="text-center text-2xl font-bold mb-6">New Company</h1>
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile Placeholder"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                    </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-4">
                    <input
                        type="text"
                        value={nameCompany}
                        onChange={(e) => setNameCompany(e.target.value)}
                        placeholder="Name Company"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2"
                    />
                    <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Website"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2"
                    />
                    <input
                        type="text"
                        value={profileImage}
                        onChange={(e) => setProfileImage(e.target.value)}
                        placeholder="URL Profile Image"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2"
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2 resize-none"
                        rows="3"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="bg-orange-500 text-white py-2 px-6 sm:px-8 rounded-full font-bold text-sm shadow-md hover:bg-orange-600 transition duration-300 w-full"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewCompanyForm;
