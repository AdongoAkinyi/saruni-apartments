import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { redirect } from "react-router-dom";
import { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    sessionStorage.setItem("numberReloaded",1)
  }, [])
  return (
    <div className="home-component-container">
      <div className="landing-container">
        <Navbar />
        <div className="landing-page">
          <div className="heading-landing-page">     
         
 
            <img 
            src="https://thesaruni.com/TheSaruniImages/Saruni-Logo.png"
            
            alt="logo"
            className="logo" />
          </div>
          <div className="body-landing-page">
            <p className="lorem">A L U X U R I O U S     
            </p>
            <p  className="lorem">S A N C T U A R Y</p>
            
            <p className="small-letters">nested in unparalleled tranquility</p>
          </div>

        </div>
      </div>
      <div className="explore">
        <h1
          onClick={() => {
            navigate("/rotate");
          }}
       className='nav-to' >
          EXPLORE
        </h1>
        <h3 className="riverside-drive-nairobi">RIVERSIDE DRIVE NAIROBI</h3>
      </div>
    </div>
  );
}

export default Home;
