import React, { useState } from "react";

const NewAuthorForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [location, setLocation] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [profileImage, setProfileImage] = useState("");

    const handleSubmit = () => {
        console.log("Author submitted:", { firstName, lastName, location, birthDate, profileImage });
        alert("Author submitted successfully!");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-11/12 sm:w-96 lg:w-1/3 bg-white text-gray-800 rounded-lg shadow-lg p-6">
                {/* Header */}
                <h1 className="text-center text-2xl font-bold mb-6">New Author</h1>
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-200">
                        <img
                            src={profileImage || "https://via.placeholder.com/100"}
                            alt="Profile Placeholder"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                    </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-4">
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2"
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2"
                    />
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2"
                    />
                    <input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2"
                    />
                    <input
                        type="text"
                        value={profileImage}
                        onChange={(e) => setProfileImage(e.target.value)}
                        placeholder="URL Profile Image"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-2"
                    />
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

export default NewAuthorForm;
