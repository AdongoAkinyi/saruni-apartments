import "./Amenities.css";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function AmenitiesHome() { 
  let navigate = useNavigate();
  return ( 
    <div class="grid-container-element">
      <div className="grid-child-element purple">
      <div className="logo-top-left">
        <h4><img
          className="navbar-logo"
          src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />  
       <a href="/" className="the-word">THE SARUNI</a> </h4>
       
        </div>
        <div className="content">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
            className="residence-home-logo"
            alt="logo"
          />
          <h4 className="reside style">A L I F E  S  T Y L E </h4>
          <h4
            className="reside style"
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            {" "}
            M E T I C U L O U S L Y
          </h4>
          <h4
            className="reside style"
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            {" "}
           C U R A T E  D
          </h4>

          <h5 className="reside-paragraph disc"> for the most discerning urban </h5>
          <h5
            className="reside-paragraph disc"
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            {" "}
            connoisseur
          </h5>

          <button
            onClick={() => {
              navigate("/amenities");
            }}
            className="button-46"
          >
            THE AMENITIES
          </button>
        </div>
      </div>

      <div className="grid-child-element green">
      <a href="/menu" className="bars-top-right"><FaBars  /></a>

        <img
        src="http://www.thesaruni.com/TheSaruniImages/rover.jpg"
          // src="https://i.pinimg.com/564x/f4/03/25/f403251ebce3a9a8b62e6e7915a426cc.jpg"
          alt="residence"
          className="residenceimagehome"
        />
      </div>
    </div>
  );
}

export default AmenitiesHome;
