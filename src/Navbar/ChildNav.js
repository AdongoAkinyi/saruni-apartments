import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useRef } from "react";
import "./ChildNav.css";

function ChildNav() {
  let navigate = useNavigate();

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
          onClick={() => {
            navigate("/");
          }}
        />
        <h4 className="th">THE SARUNI</h4>
        <nav ref={navRef}>
        <div className="menu">
        <a href="/availability" className="menutext">AVAILABILITY</a>
        <a href="/availability" className="menutext">GET IN TOUCH</a>

        </div>

          <a href="/menu" className="barss"><FaBars/></a>
          

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

export default ChildNav;
