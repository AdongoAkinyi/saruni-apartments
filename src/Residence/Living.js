import "./Rooms.css";
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import { Carousel } from "react-responsive-carousel";
import LivingL from "./Rosel/LivingL";
import LivingR from "./Rosel/LivingR";

function Living() {
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
              src="http://testdeploy.thesaruni.com/logowhite.png"
              className="residence-neigh-logo-grey"
              alt="logo"
            />

            <h6 className="gold-secttionn one">T H E </h6>
            <h1 className="gold-secttionn one"> R E S I D E N C E S</h1>
          </div>

          <div className="sidebar-center">
            <h4
              className="activelink"
              onClick={() => {
                navigate("/livingroom");
              }}
            >
              LIVING AREA
            </h4>
            <h4
              onClick={() => {
                navigate("/bedroom");
              }}
              id="rooms"
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

        <div class="flex-image2">
          <img
          src="http://www.thesaruni.com/TheSaruniImages/livingleft.jpg"
            alt="3 Bedroom apartment living area example"
            className="dd"
          />
                    3 Bedroom apartment living area example

        </div>
        <div class="flex-image2">
          <img
          src="http://www.thesaruni.com/TheSaruniImages/livingright.jpg"

            alt="2 Bedroom apartment living area example"
            className="dd"
          />
          2 Bedroom apartment living area example
        </div>
          
        </div>
      </div>
    </div>
  );
}

export default Living;
