import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logotex.png";
import { logout } from "../../store/action/actionsignin/actionsignin";

const rolePermissions = {
  noLoggin: [
    { to: "/", text: "Home" },
    { to: "/mangas", text: "Mangas" },
    { to: "/signIn", text: "Sign In" },
    { to: "/signUpRegister", text: "Sign Up" },
  ],
  0: [
    { to: "/", text: "Home" },
    { to: "/mangas", text: "Mangas" },
    { to: "/newRole", text: "New role" },
  ],
  1: [
    { to: "/", text: "Home" },
    { to: "/mangas", text: "Mangas" },
    { to: "/authorprofile", text: "Author Profile" },
    { to: "/manager", text: "Manager" },

  ],
  2: [
    { to: "/", text: "Home" },
    { to: "/mangas", text: "Mangas" },
    { to: "/authorprofile", text: "Author Profile" },
    { to: "/manager", text: "Manager" },
    { to: "/company", text: "Company" },
  ],
  3: [
    { to: "/", text: "Home" },
    { to: "/mangas", text: "Mangas" },
    { to: "/authorprofile", text: "Author Profile" },
    { to: "/manager", text: "Manager" },
    { to: "/author", text: "Author" },
    { to: "/company", text: "Company" },
    { to: "/adminPanel", text: "Admin Panel" },
  ],
};

const NavBar = () => {
  const { user, token, role, loading } = useSelector(
    (state) => state.signinStore || {}
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const defaultPhoto =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUhlsFN5Mtzlxg8ZRtInt1GyjRKF9Io0a9A&s";

  if (!loading) {
    return (
      <header className="relative">
        <div className="flex items-center justify-between absolute z-50 text-orange-500 p-4 w-full">
          <button
            className="p-2 rounded focus:outline-none focus:ring focus:ring-orange-500"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div className="flex items-center">
            <img className="w-25 h-10" src={logo} alt="Logo" />
            <p className="text-3xl text-white font-bold ml-2 mr-10">雪</p>
          </div>
        </div>

        {menuOpen && (
          <nav className="fixed top-0 left-0 w-full sm:w-64 md:w-80 lg:w-96 h-full bg-orange-500 text-white flex flex-col p-6 z-50">
            {token && (
              <div className="flex items-center justify-start gap-4 mb-6">
                <img
                  src={
                    user?.photo ? user.photo : user.user.photo || defaultPhoto
                  }
                  alt="User Avatar"
                  className="w-[11vh] h-[11vh] rounded-full object-cover"
                />
                <p className="text-lg">
                  {user?.email ? user.email : user.user.email}
                </p>
              </div>
            )}
            <ul className="flex flex-col items-center gap-4">
              {(role == null
                ? rolePermissions.noLoggin
                : rolePermissions[role]
              ).map((route, index) => (
                <li key={route.to + index}>
                  <Link
                    to={route.to}
                    onClick={toggleMenu}
                    className="text-lg hover:text-orange-500 hover:bg-white transition-colors py-2 px-4 sm:px-8 md:px-12 lg:px-28 rounded"
                  >
                    {route.text}
                  </Link>
                </li>
              ))}
            </ul>

            {token && (
              <button
                onClick={() => {
                  dispatch(logout());
                  toggleMenu();
                  navigate("/home"); // Redirige al usuario a /home
                }}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
              >
                Logout
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              x
            </button>
          </nav>
        )}
      </header>
    );
  }
};

export default NavBar;
