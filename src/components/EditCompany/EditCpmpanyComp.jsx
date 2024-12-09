import React, { useState } from "react";

const EdithCompanyComp = () => {
  const [nameCompany, setNameCompany] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const handleSave = () => {
    console.log("Saving company:", { nameCompany, location, website, profileImage });
    alert("Company details saved!");
  };

  const handleDelete = () => {
    console.log("Deleting account");
    alert("Account deleted!");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
      {/* Form Section */}
      <form className="w-full sm:w-10/12 md:w-1/2 lg:w-1/3 bg-white text-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-center text-lg font-bold mb-4">Edit Company</h1>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
            src={profileImage || "https://via.placeholder.com/80"}
            alt="Profile"
          />
        </div>

        {/* Input Fields */}
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
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Website"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-1"
          />
          <input
            type="text"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
            placeholder="URL Profile Image"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm py-1"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-4">
          <button
            type="button"
            onClick={handleSave}
            className="bg-green-500 text-white py-2 rounded-full font-bold text-sm shadow-md hover:bg-green-600 transition duration-300"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-100 text-red-500 py-2 rounded-full font-bold text-sm shadow-md hover:bg-red-200 transition duration-300"
          >
            Delete Account
          </button>
        </div>
      </form>

      {/* Image Section */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center text-center">
        <div>
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
