import React, { useEffect, useState } from "react";
import bgProfiles from "../../assets/image/bgProfiles.jpg";
import Switch from "react-switch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Author = () => {
  const { user } = useSelector((state) => state.signinStore);
  const [author, setAuthor] = useState([]);
  const [mangasAutor, setMagasAutor] = useState([]);
  console.log(mangasAutor, "mangasAutor adwadawdad");
  console.log(author, "author quenecesito");

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/api/author/user/${user.user._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAuthor(response.data.response);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    fetchAuthor();
  }, [user.user._id]);

  const city = author.length > 0 ? author[0].city : "Loading...";
  const date = author.length > 0 ? author[0].date : "Loading...";
  const photo = author.length > 0 ? author[0].photo : "";
  const name = author.length > 0 ? author[0].name : "Loading...";
  const lastname = author.length > 0 ? author[0].last_name : "Loading...";
  const authora = author.length > 0 ? author[0]._id : "Loading...";
  const rawDate = date;
  const formattedDate = rawDate.split("T")[0];

  useEffect(() => {
    const fetchmagasAutor = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/api/manga/mangaAuthorOrCompany?author=${authora}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMagasAutor(response.data.response);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    fetchmagasAutor();
  }, [authora]);

  const [isNew, setIsNew] = useState(true);
  const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate();

  const toggleSwitch = () => {
    setIsOn(!isOn);
    setIsNew(!isNew);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center pt-20 transition-colors duration-300 bg-gray-100">
      {/* Sección del perfil con fondo */}
      <div className="relative w-full flex flex-col items-center justify-center mb-12 lg:w-2/3 lg:max-w-4xl rounded-lg shadow-lg  ">
        <div className="absolute inset-0 hidden md:block">
          <img
            src={user?.user.photo ? user?.user.photo : bgProfiles}
            alt="Background"
            className="w-full h-full object-cover rounded-lg md:h-72 lg:h-96 "
          />
        </div>
        <div className="relative flex flex-row items-center w-full px-4 py-8 text-left md:flex-col md:items-center md:justify-center md:py-12">
          {/* Imagen del autor */}
          <img
            src={photo}
            alt="Author Avatar"
            className="w-28 h-28 rounded-full object-cover border-4 border-white md:w-36 md:h-36 lg:w-44 lg:h-44"
          />
          {/* Texto del autor */}
          <div className="flex-1 mt-4 md:mt-0 md:ml-6">
            <h1 className="text-lg font-bold text-black bg md:text-2xl lg:text-3xl">
              {name} {lastname}
            </h1>
            <p className="text-sm text-black flex items-center mt-2 md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2 text-black md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {city}
            </p>
            <p className="text-sm text-black flex items-center mt-2 md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2 text-black  md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                />
              </svg>
              {formattedDate}
            </p>
          </div>
          {/* Botón de editar */}
          <button className="absolute top-4 right-4 md:static p-2 bg-gray-200 hover:bg-gray-300 text-black rounded-lg shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Línea separadora */}
      <div className="w-full border-t border-gray-300 mb-6 lg:w-2/3"></div>

      {/* Toggle personalizado */}
      <div className="flex items-center my-4">
        <p className="text-sm font-medium mr-2">New</p>
        <Switch
          checked={isNew}
          onChange={toggleSwitch}
          onColor="#FF6B2B"
          offColor="#ccc"
          checkedIcon={false}
          uncheckedIcon={true}
          height={24}
          width={48}
        />
        <p className="text-sm font-medium ml-2">Old</p>
      </div>

      {/* Cards de mangas */}
      <div className="grid grid-cols-2 gap-4 w-full lg:grid-cols-4 lg:w-2/3">
        {mangasAutor.length > 0 ? (
          mangasAutor.map((manga, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={manga.cover_photo}
                alt={manga.title}
                className="w-full h-40 object-cover rounded-lg shadow-md lg:h-48"
              />
              <p className="text-sm mt-2 text-gray-800 lg:text-base">
                {manga.title}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg lg:text-2xl justify-center items-center flex-col">
            <img
              src="https://s3-alpha-sig.figma.com/img/e3f3/aefe/4034bb9ec8e3fc5e1f24ce5ff3a47e22?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hoWiHiiGhK~mhVCinaP4Tzru-HTu5gawIbFi5J3pdAgUTuG5~tg6RzvCae6O8f-36hitoPLT-WTBbWTCKQGorY~YhQWoy8O13~uKSyZdAXNWIfoRhk-aAUbSgMBCNTlDP-ANTDnURzQQgUuUe~ntWqOs1s79yXRJvwYzgEJYY5BKFipUmM0THf6MHNDMt1coe5lF9SucMeks49QfniJC2NsJXRT9nY~fWaj0i4sMMvRDmjahRfR2MIAAYL6E3ipujI-aGTcq4TPejZCWzc0PbEcJjVYNWgbeIWgEtNPCaMX138qKPuZZkI4GdsDniijgnGBRACLsRyrxtyjQ~rzxaA__"
              alt=""
            />
            No mangas available. It looks like the author hasn't created any
            mangas yet.
          </p>
        )}
      </div>

      {/* Botón Manage */}
      <div className="w-full mt-6 lg:w-2/3">
        <button
          className={`w-full py-2 font-bold rounded-lg shadow-md transition-colors ${
            isOn
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
          onClick={() => navigate("/manager")}
        >
          Manager!
        </button>
      </div>

      {/* Botón Regresar */}
      <div className="w-full mt-6 lg:w-2/3 flex justify-center">
        <button
          onClick={goBack}
          className={`px-4 py-2 border font-semibold rounded-lg shadow-md transition-colors ${
            isOn
              ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
              : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default Author;
