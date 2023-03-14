import "./Amenities.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function AmenitiesHome() {
  let navigate = useNavigate();
  return (
    <div class="grid-container-element">
      <div className="grid-child-element purple">
        <div className="content">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
            className="residence-home-logo"
            alt="logo"
          />
          <h4 className="reside">A L I F E  S  T Y L E </h4>
          <h4
            className="reside"
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            {" "}
            M E T I C U L O U S L Y
          </h4>
          <h4
            className="reside"
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            {" "}
           C U R A T E  D
          </h4>

          <h5 className="reside-paragraph"> for the most discerning urban </h5>
          <h5
            className="reside-paragraph"
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            {" "}
            connoisseur
          </h5>

          <button
            onClick={() => {
              navigate("/residence");
            }}
            className="button-46"
          >
            THE AMENITIES
          </button>
        </div>
      </div>

      <div className="grid-child-element green">
        <img
          src=""
          alt="residence"
          className="residenceimagehome"
        />
      </div>
    </div>
  );
}

export default AmenitiesHome;
