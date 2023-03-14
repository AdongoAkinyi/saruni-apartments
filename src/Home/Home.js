import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Home() {
  let navigate = useNavigate();
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
            {/* <h1 className="apartment-name"> THE SARUNI </h1> */}
          </div>
          <div className="body-landing-page">
            <p className="lorem">A LUXURIOUS SANCTUARY</p>
            <p className="small-letters">nested in unparalleled tranquility</p>
          </div>
        </div>
      </div>
      <div className="explore">
        <h1
          onClick={() => {
            navigate("/residencehomepage");
          }}
        >
          EXPLORE
        </h1>
      </div>
    </div>
  );
}

export default Home;
