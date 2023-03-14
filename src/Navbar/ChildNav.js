import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function ChildNav() {
  let navigate = useNavigate();
    const navRef = useRef();
const showNavbar =()=> {
    navRef.current.classList.toggle("responsive_nav")
}

  return (
    <div>
      <header className='header'>
      <img src='http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png' className='nav-logo'  alt='logo'/>

      <h1 className="home" onClick={() => {
            navigate("/");
          }} style={{color:"black"}} >THE SARUNI</h1>
        <nav ref={navRef}>
        
          <a href="/availability">AVAILABILITY</a>
          <a href="/#">GET IN TOUCH</a>
          <FaBars/>
          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </nav>
        <button  onClick={showNavbar} className="nav-btn">
          <FaBars />
        </button>
      </header>
    </div>
  )
}

export default ChildNav