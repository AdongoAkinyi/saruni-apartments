import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./Navbar.css";

function Navbar() {
    const navRef = useRef();
const showNavbar =()=> {
    navRef.current.classList.toggle("responsive_nav")
}

  return (
    <div>
      <header className="header">
        <img
          className="navbar-logo"
          src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
          alt="logo"
        />
        <h4 className="the">THE SARUNI</h4>
        <nav ref={navRef}>
          <a href="/#" className="bars"><FaBars/></a>
          

          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </nav>
        <button  onClick={showNavbar} className="nav-btn">
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
