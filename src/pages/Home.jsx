import Hero from "../components/Hero/Hero";
import imagenHome from "../assets/image/bgHome.png";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { setUser } from "../store/action/actionsignin/actionsignin";

const loginWithToken = async (token) => {
  try {
    const response = await axios.get("http://localhost:8080/api/auth/token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

const HeroHome = ({ handleClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.signinStore.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setUser(null));
    navigate("/");
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      loginWithToken(token).then((user) => {
        dispatch(setUser({ user, token }));
        setIsLoggedIn(true);
      });
      navigate("/home");
    } else if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, [dispatch, navigate]);

  return (
    <div className="w-full h-screen sm:h-[75vh] relative flex items-center">
      <img src={imagenHome} className="w-full h-full object-cover" alt="Home" />
      <div className="absolute left-[8vw]">
        <h3 className="font-bold text-5xl text-white">For the love of manga</h3>
        <p className="text-white text-3xl mt-2">Explore our varieties</p>
        <p className="text-white text-2xl mt-2">#MingaLove❤</p>
        {user ? (
          <>
            <button
              onClick={() => navigate("/home")}
              className="px-20 py-2 bg-white mt-2 text-orange-400 rounded-md font-bold text-3xl mr-4"
            >
              Let's Go!
            </button>
            <button onClick={handleLogout}></button>
          </>
        ) : (
          <button
            onClick={() => handleClick()}
            className="px-20 py-2 bg-white mt-2 text-orange-400 rounded-md font-bold text-3xl"
          >
            Sign In!
          </button>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signIn");
  };

  return (
    <>
      {/* Mostrar solo el HeroHome en pantallas móviles */}
      <div className="block sm:hidden">
        <HeroHome handleClick={handleClick} />
      </div>
      {/* Mostrar el resto solo en pantallas más grandes */}
      <div className="hidden sm:block">
        <HeroHome handleClick={handleClick} />
        <Carousel />
      </div>
    </>
  );
};

export default Home;
