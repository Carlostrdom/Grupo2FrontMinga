import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createAuthor,
} from "../../store/action/actionsignin/actionsignin";
import Swal from "sweetalert2";

const NewAuthorForm = () => {
  const { user, token } = useSelector((state) => state.signinStore);
  console.log(user,  "user y token");
  

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [city, setCity] = useState("");

  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user.user._id, "user._id que esta en newAuthor");
    setIsSubmitting(true);

    try {
      dispatch(
        createAuthor({
          name,
          last_name,
          city,
          date,
          photo,
          user_id: user.user._id,
        })
      );
      Swal.fire({
        background: "#000000",
        color: "#fff",
        imageUrl: "https://cdn.pixabay.com/photo/2015/10/07/22/54/pen-spinning-976930_640.jpg",
        imageHeight: 300,
        imageAlt: "A tall image",
        text: `welcome ${name} to the world of manga`,
        icon: "success",
      });

      navigate("/home");
      console.log(createAuthor, "createAuthor ya sabes");
    } catch (err) {
      setError("Failed to create author. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "last_name":
        setLastName(value);
        break;
      case "city":
        setCity(value);
        break;
      case "coutry":
        setCountry(value);
        break;
      case "date":
        setDate(value);
        break;
      case "photo":
        setPhoto(value);
        break;

      default:
        break;
    }
  };


  

  const [ image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/07/22/54/pen-spinning-976930_640.jpg");

  useEffect(() => {
    if( photo!== "")setImage(photo)
  },[photo])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-11/12 sm:w-96 lg:w-1/3 bg-white text-gray-800 rounded-lg shadow-lg p-6">
        {/* Header */}
        <h1 className="text-center text-2xl font-bold mb-6">New Author</h1>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
            <img
              src={
                image
              }
              alt="Profile Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Input Fields */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm py-2 px-3 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              name="last_name"
              type="text"
              value={last_name}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm py-2 px-3 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              name="city"
              type="text"
              value={city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm py-2 px-3 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              name="date"
              type="date"
              value={date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm py-2 px-3 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Image URL
            </label>
            <input
              name="photo"
              type="text"
              value={photo}
              onChange={handleChange}
              placeholder="Enter the URL for your profile image"
              className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm py-2 px-3 mt-1"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-orange-500 text-white py-2 px-6 rounded-lg font-bold text-sm shadow-md 
        ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
        } 
        transition duration-300 w-full mt-4`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewAuthorForm;
