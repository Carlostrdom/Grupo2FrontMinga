import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/image/logotex.png";
import { logout } from "../../store/action/actionsignin/actionsignin";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const routes = [
  { to: "/home", text: "Home", requireAuth: false, unrequireAuth: false },
  { to: "/mangas", text: "Mangas", requireAuth: false, unrequireAuth: false },
  { to: "/chapter", text: "Chapter", requireAuth: true, unrequireAuth: false },  
  { to: "/signIn", text: "Sign In", requireAuth: false, unrequireAuth: true },
  { to: "/newRole", text: "New Role", requireAuth: true, unrequireAuth: false },
  { to:  "/fovourite", text: "Fovourite", requireAuth: false, unrequireAuth: true },
  { to: "/authorprofile", text: "Author Profile", requireAuth: false, unrequireAuth: true },
  { to: " /newAuthor", text: "New Author", requireAuth: false, unrequireAuth: true },
  { to : "/newCompany", text: "New Company", requireAuth: false, unrequireAuth: true },
  { to: "/manager" , text: "Manager", requireAuth: false, unrequireAuth: true },
  { to: "/newManga", text: "New Manga", requireAuth: false, unrequireAuth: true },
  { to: "/newChapter", text: "New Chapter", requireAuth: false, unrequireAuth: true },
  { to: "/editManga", text: "Edit Manga", requireAuth: false, unrequireAuth: true },
  { to: "/editChapter", text: "Edit Chapter", requireAuth: false, unrequireAuth: true },
  { to: "/adminPanel", text: "Admin Panel", requireAuth: false, unrequireAuth: true },
  { to: "/signUpRegister", text: "Sign Up", requireAuth: false, unrequireAuth: true },
];

const NavBar = () => {
  const token = useSelector((state) => state.signinStore.token);
  const user = useSelector((state) => state.signinStore.user);

  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="navbar">
        {/* Botón del menú hamburguesa */}
        <div className="menu-container">
          <button className="btn-hamburg" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#F97316"
              className="MenuHamburg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          
          {/* Menú desplegable horizontal */}
          <nav className={`menu ${menuOpen ? "open" : "closed"}`}>
            <ul className="menu-list">
            {routes
            .filter(
              ({ requireAuth, unrequireAuth }) =>
                (!requireAuth || token) && (!unrequireAuth || !token)
            )
            .map(({ to, text }) => (
              <li key={to}>
                <Link to={to} className="hover:underline text-center">
                  {text}
                </Link>
              </li>
            ))}
            </ul>
          </nav>
        </div>
        {token && (
            <button className="hover:underline bg-orange-600 text-white text-center items-center" onClick={() => dispatch(logout())}>Sign Out</button>
          )}
        {/* Logo */}
        <div className="contentLogo">
          <img className="Logo" src={logo} alt="Logo" />
          <p className="imagenLogo">雪</p>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
