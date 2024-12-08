import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Nav.css";
import logo from "../../assets/image/logotex.png";
import { logout } from "../../store/action/actionsignin/actionsignin";
import { Link } from "react-router-dom";

// const routes = [
  
//   { to: "/", text: "Home", requireAuth: false, unrequireAuth: false },
//   { to: "/home", text: "Home", requireAuth: false, unrequireAuth: false },
//   { to: "/mangas", text: "Mangas", requireAuth: false, unrequireAuth: false },
//   { to: "/signIn", text: "Sign In", requireAuth: false, unrequireAuth: true },
//   { to: "/signUpRegister", text: "Sign Up", requireAuth: false, unrequireAuth: true },
//   { to: "/chapter", text: "Chapter", requireAuth: true, unrequireAuth: false },  
//   { to: "/newRole", text: "New Role", requireAuth:true, unrequireAuth: false },
//   { to: "/fovourite", text: "Fovourite", requireAuth: true, unrequireAuth: true },
//   { to: "/authorprofile", text: "Author Profile", requireAuth: true, unrequireAuth: true },
//   { to: " /newAuthor", text: "New Author", requireAuth: true, unrequireAuth: true },
//   { to: "/newCompany", text: "New Company", requireAuth: true, unrequireAuth: true },
//   { to: "/manager" , text: "Manager", requireAuth: true, unrequireAuth: true },
//   { to: "/newManga", text: "New Manga", requireAuth: true, unrequireAuth: true },
//   { to: "/newChapter", text: "New Chapter", requireAuth: true, unrequireAuth: true },
//   { to: "/editManga", text: "Edit Manga", requireAuth: true, unrequireAuth: true },
//   { to: "/editChapter", text: "Edit Chapter", requireAuth: true, unrequireAuth: true },
//   { to: "/adminPanel", text: "Admin Panel", requireAuth: true, unrequireAuth: true },
// ];
const rolePermissions = {
  noLoggin:[{ to: "/", text: "Home"},{ to: "/mangas", text: "Mangas"},{ to: "/signIn", text: "Sign In"},{ to: "/signUpRegister", text: "Sign Up"}],
  // User
  0: [{ to: "/", text: "Home"},{ to: "/mangas", text: "Mangas"},{ to: "/newRole", text: "new role"}], 
  // Author
  1: [
    { to: "/", text: "Home"},{ to: "/mangas", text: "Mangas"},  { to: "/manga", text: "Manga"},{ to: "/authorprofile", text: "Author Profile"}, { to: "/manager" , text: "Manager"}
    
  ], 
// Company
  2: [
    { to: "/", text: "Home"},{ to: "/mangas", text: "Mangas"},  { to: "/manga", text: "Manga"},{ to: "/authorprofile", text: "Author Profile"}, { to: "/manager" , text: "Manager"}

  ], 
  // Admin
  3: [
    { to: "/", text: "Home"},{ to: "/mangas", text: "Mangas"},  { to: "/manga", text: "Manga"},{ to: "/authorprofile", text: "Author Profile"}, { to: "/manager" , text: "Manager"},
    { to: "/adminPanel", text: "Admin Panel"},
  ], 
};
const NavBar = () => {
  const { user = null, token = null, role } = useSelector((state) => state.signinStore || {});


  console.log(role,"role de nav bar");
  
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Rol del usuario (asume que `user?.role` contiene el rol como número)
  const userRole = user?.role || null;
  console.log(userRole, "userRole ese es el rol");
  
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
          <nav className={`menu ${menuOpen ? "open" : "closed"} h-10 text-center text-white`}>
            <ul className="menu-list">
           
              {role == null ? rolePermissions.noLoggin.map((route,index) => (
                <li key={route.to + index}>
                <Link to={route.to} className="hover:underline text-center text-white">
                  {route.text}
                </Link>
              </li>                 
              )
            ) : rolePermissions[role].map((route,index) => (
              <li key={route.to + index}>
                <Link to={route.to} className="hover:underline text-center text-white">
                  {route.text}
                </Link>
              </li> 
            ))}
            </ul>
          </nav>
        </div>
        {token && (
          <button
            className="hover:underline bg-orange-600 text-white text-center items-center"
            onClick={() => dispatch(logout())}
          >
            Sign Out
          </button>
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