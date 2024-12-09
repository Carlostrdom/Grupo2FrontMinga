import React, { useState } from "react";

const EdithCompanyComp = () => {
    const [nameCompany, setNameCompany] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [profileImage, setProfileImage] = useState("");

    const handleSave = () => {
        console.log("Saving author:", { nameCompany, location, website, profileImage });
        alert("Author details saved!");
    };

    const handleDelete = () => {
        console.log("Deleting account");
        alert("Account deleted!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex gap-56">
                <div className="w-72 rounded-lg p-6 text-center ">
                    <h1 className="text-center text-lg font-bold mb-4">EditCompany</h1>

                   
                    <div className="flex justify-center mb-6">
                        <img
                            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                            src={profileImage || "https://via.placeholder.com/80"}
                            alt="Profile"
                        />
                    </div>

                    <div className="space-y-4">
                        <input
                            type="text"
                            value={nameCompany}
                            onChange={(e) => setNameCompany(e.target.value)}
                            placeholder="Name Company"
                            className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-1"
                        />

                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Location"
                            className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-1"
                        />
                        <div className="mb-4">
                            <input
                                type="text"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-1"
                                placeholder="website"
                            />
                        </div>
                        <input
                            type="text"
                            value={profileImage}
                            onChange={(e) => setProfileImage(e.target.value)}
                            placeholder="URL Profile Image"
                            className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-1"
                        />
                    </div>

                   
                    <div className="mt-6 flex flex-col gap-4">
                        <button
                            onClick={handleSave}
                            className="bg-green-500 text-white py-2 rounded-full font-bold text-sm shadow-md hover:bg-green-600 transition duration-300 pt-4 pb-4"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-100 text-red-500 py-2 rounded-full font-bold text-sm shadow-md hover:bg-red-200 transition duration-300 pt-4 pb-4"
                        >
                            Delete Account
                        </button>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold mt-6 mb-4">Chapter #1 - Discover the world</h3>
                    <img
                        className="w-72 h-96 rounded-md shadow-md"
                        src="https://s3-alpha-sig.figma.com/img/c698/cc3f/21fb3f85f083e6806f525d147a260d5a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZlZIvHXfkR~DQBAYQmN4hGrrfNsNaOqUtlCkkaTgoRnG79-nmRcQ5SnWcA9XPwujPbmGyKxVb1wdzHSMF7GnFMv3I9xqg1adjIG8Nz7JNWEHeiXmITxL1OPjsiJfP3hQ6RUEF8EmuB9nMqEK4Tw8G79~p4NBuZ~uFNwJOws4gUfrDJODqCY26oRBkKOtSMjnn1ztpYY08wgkJeAQUDG~hht8pZTeB1-MssahEw2OvXOojM0X8yCDjmjSwWVfRXLWQy-sTnefTV0ba4bGWuQM4eFivT73hJZUda9jfF8RtuulN6UfIhCx-Sk036hHSKSw3DvKffg9tm2jWqQD9KAmg__"
                        alt="Manga"
                    />
                </div>
            </div>
        </div>
    );
};

export default EdithCompanyComp;