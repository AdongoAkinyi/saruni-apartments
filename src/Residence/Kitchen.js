import "./Rooms.css";
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
// import { FaAngleUp } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import KitchenL from "./Rosel/KitchenL";
import KitchenR from "./Rosel/KitchenR";
import { FaAngleUp } from "react-icons/fa";

function Kitchen() { 
  let navigate = useNavigate();
  return (
    <div className="kubwa-resident">
      <div>
        <ChildNav />{" "}
      </div>
      <div className="flexbox-container-living">
        <div className="flexbox-item-living1">
          <div className="the-neighboorhoodd">
            <img
              src="https://thesaruni.com/TheSaruniImages/logowhite.png"
              className="residence-home-logo-white"
              alt="logo"
            />

            <h6 className="gold-secttionn one">T H E </h6>
            <h1 className="gold-secttionn one"> R E S I D E N C E S</h1>
          </div>

          <div className="sidebar-center">
            <h4
              id="rooms"
              onClick={() => {
                navigate("/livingroom");
              }}
            >
              LIVING AREA
            </h4>
            <h4
              id="rooms"
              onClick={() => {
                navigate("/bedroom");
              }}
            >
              BEDROOMS
            </h4>
            <h4
              className="activelink"
              onClick={() => {
                navigate("/kitchen");
              }}
            >
              {" "}
              KITCHEN
            </h4>
          </div>
          <div className="paragraph-bottom-disclaimer">
            <h4 id="disclaimer1">DISCLAIMER</h4>
            <p id="disclaimer2">
              These 3 & 2 bedroom apartment artistic impressions or image
              renders contained on this website are for illustrative on this
              website are for illustrative purposes only and should not be
              relied upon as being complete or accurate
            </p>
          </div>
        </div>
        <div className="flexbox-item-living2">
          <Carousel infiniteLoop>
            <div>
              <KitchenL />
              <p className="legend" style={{backgroundColor:"goldenrod"}}>3 Bedroom apartment kitchen area example</p>
            </div>
            <div>
              <KitchenR />
              <p className="legend" style={{backgroundColor:"goldenrod"}}>2 Bedroom apartment kitchen area example</p>
            </div>
          </Carousel>
          <div
            className="explore"
            onClick={() => {
              navigate("/menu");
            }}
          >
            <h1
              className="nav-to"
              style={{
                fontWeight: "normal",
                fontSize: "25px",
                marginTop: "-23px",
              }}
            >
              GO TO MENU <FaAngleUp style={{ marginRight: "20px" }} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kitchen;
