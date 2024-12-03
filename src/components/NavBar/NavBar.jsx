import "./Nav.css";
import logo from "../../assets/image/logotex.png"
import MenuHamburg from "../../assets/image/Menu.png"

const NavBar = () => {
    return (
        <header className="header">
            <div className="navbar">
                <button className="btn-hamburg">
                    <img className="MenuHamburg" src={MenuHamburg}></img>
                </button>
                <div className="contentLogo">
                <img className="Logo" src={logo}></img>
                <p className="imagenLogo"> 雪 </p>
                </div>
               
            </div>
            

        </header>
    )
}

export default NavBar