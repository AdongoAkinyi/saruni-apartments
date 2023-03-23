import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";


function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    sessionStorage.setItem("numberReloaded", 1);
  }, []);
  return (
    <div>
   
      <div className="flexbox-container">
        <div className="header-section"></div>
        <div className="logo-section-landing">
          <img
            src="https://thesaruni.com/TheSaruniImages/Saruni-Logo.png"
            alt="logo"
            className="home-logo"
          />
        </div>
        <div className="home-content"> 
          <p className="lore">A L U X U R I O U S</p>
          <p className="lore">S A N C T U A R Y</p>
          <p className="home-nest">nested in unparalleled tranquility</p>
        </div>
      </div>
      <div className="explore">
        <h1
          onClick={() => {
            navigate("/rotate");
          }}
          className="nav-to"
        >
          EXPLORE<FaAngleDown/>
        </h1>
        {/* <h3 className="riverside-drive-nairobi">RIVERSIDE DRIVE NAIROBI</h3> */}
      </div>
    </div>
  
  );
}

export default Home;
