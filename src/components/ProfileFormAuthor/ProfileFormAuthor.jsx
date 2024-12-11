import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAuthor } from "../../store/action/actionsignin/actionsignin";

const ProfileFormAuth = () => {
  const { author } = useSelector((state) => state.signinStore);

  const [firstName, setFirstName] = useState(author?.name);
  const [lastName, setLastName] = useState(author?.last_name);
  const [location, setLocation] = useState(author?.city);
  const [Date, setDate] = useState(author?.date?.split("T")[0]);
  const [photo, setPhoto] = useState(author?.photo);

  const [editAuthor, setEditAuthor] = useState("");
  console.log(editAuthor, "editAuthor dadawdadwadw");

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:8080/api/author/update`,
        {
          name: firstName,
          last_name: lastName,
          city: location,
          date: Date,
          photo: photo,
          _id: author._id,
        },

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditAuthor(response.data.response);
    } catch (error) {
      console.error("Error fetching author:", error);
    }
  };

let dispatch = useDispatch();
  useEffect(() => {
      if (editAuthor) {
        dispatch(setAuthor(editAuthor))
        alert("Author details saved!");

  }}, [editAuthor]);

  const handleDelete = () => {
    console.log("Account deleted");
    alert("Account deleted successfully!");
  };

  return (
    <div className="relative px-4 sm:px-8 py-8">
      <div className="bg-slate-100 rounded-xl shadow-lg p-6 max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-start gap-8">
          <form
            onSubmit={(e) => handleSave(e)}
            className="flex flex-col gap-4 w-full max-w-md"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
              Edit Profile
            </h2>

            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-2"
              placeholder="First Name"
              required
            />

            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-2"
              placeholder="Last Name"
              required
            />

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-2"
              placeholder="Address"
              required
            />

            <input
              type="date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-2"
              required
            />

            <input
              type="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 text-gray-800 text-sm p-2"
              required
            />
            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-green-400 text-white py-2 rounded-full font-bold text-sm shadow-md hover:bg-green-700 transition duration-300"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="flex-1 bg-red-200 text-red-500 py-2 rounded-full font-bold text-sm shadow-md hover:bg-red-300 transition duration-300"
              >
                Delete Account
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center text-center">
            <img
              className="w-32 h-32 rounded-full border-2 border-gray-300"
              src={photo}
              alt="Profile"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {firstName} {lastName}
              </h2>
              <p className="text-sm text-gray-600">{location}</p>
              <p className="text-sm text-gray-600">{Date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFormAuth;
