import "./Rooms.css";
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import { Carousel } from "react-responsive-carousel";
import BedroomL from "./Rosel/BedroomL";
import BedroomR from "./Rosel/BedroomR";

function Bedroom() {
  let navigate = useNavigate();

  return (
    <div className="kubwa-resident">
      <div>
        <ChildNav />{" "}
      </div>
      <div className="flexbox-container-living">
        <div className="flexbox-item-living1">
        <div className="the-residences white">
              <img
                src="https://thesaruni.com/TheSaruniImages/logowhite.png"
                className="residence-home-logo-white"
                alt="logo"
              />

              <h6 className="gold-secition one top">T H E </h6>
              <h1 className="gold-secition two"> R E S I D E N C E S</h1>
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
                className="activelink"
                onClick={() => {
                  navigate("/bedroom");
                }}
              >
                BEDROOMS
              </h4>
              <h4
                onClick={() => {
                  navigate("/kitchen");
                }}
                id="rooms"
              >
                {" "}
                KITCHEN
              </h4>
            </div>
            <div className="paragraph-bottom-disclaimer">
              <h4 style={{ marginBottom: "20px" }} id="disclaimer">
                DISCLAIMER
              </h4>
              <p style={{ fontWeight: "20px" }} id="disclaimer">
                These 3 & 2 bedroom aparment artistic
              </p>
              <p style={{ fontWeight: "20px" }} id="disclaimer">
                impressions or image renders contained{" "}
              </p>
              <p style={{ fontWeight: "20px" }} id="disclaimer">
                on this website are for illustrative{" "}
              </p>
              <p style={{ fontWeight: "20px" }} id="disclaimer">
                {" "}
                purposes only and should not be relied
              </p>
              <p style={{ fontWeight: "20px" }} id="disclaimer">
                upon as being complete or accurate
              </p>
            </div>
        </div>
        <div className="flexbox-item-living2">
          <Carousel infiniteLoop>
            <div>
              <BedroomL />
              <p className="legend">3 Bedroom apartment bedroom example</p>
            </div>
            <div>
              <BedroomR />
              <p className="legend">2 Bedroom apartment bedroom example</p>
            </div>
          </Carousel>
        </div>
      </div>

      
    </div>
  );
}

export default Bedroom;
