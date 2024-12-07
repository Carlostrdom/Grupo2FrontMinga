import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser} from "../../store/action/actionsignin/actionsignin";

const NewAuthorForm = () => {
    const {author,loading,error} = useSelector(state => state.authorNewStore);
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [date, setDate] = useState("");
    const [photo, setPhoto] = useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log("Author submitted:", { name, last_name, city, date, photo });
        alert("Author submitted successfully!");
    };
    useEffect( ()=> { 
        if(author.user){ {
          console.log(author,"dasdaasdaw");
          
          dispatch(setUser(author));
          navigate("/home");
        }
      }},[author])
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

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-11/12 sm:w-96 lg:w-1/3 bg-white text-gray-800 rounded-lg shadow-lg p-6">
                {/* Header */}
                <h1 className="text-center text-2xl font-bold mb-6">New Author</h1>
                
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
                        <img
                            src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
                            alt="Profile Placeholder"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
    
                {/* Input Fields */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label  className="block text-sm font-medium text-gray-700">
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
                        <label  className="block text-sm font-medium text-gray-700">
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
                        <label  className="block text-sm font-medium text-gray-700">
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
                        <label  className="block text-sm font-medium text-gray-700">
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
                        className="bg-orange-500 text-white py-2 px-6 rounded-lg font-bold text-sm shadow-md hover:bg-orange-600 transition duration-300 w-full mt-4"
                    >
                       Send
                    </button>
                </form>
            </div>
        </div>
    );
}    
export default NewAuthorForm;
