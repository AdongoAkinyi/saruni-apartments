import "./Rooms.css";
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";

function Living() {
  let navigate = useNavigate();

  return (
    <div className="kubwa-resident">
      <div>
        <ChildNav />{" "}
      </div>
      <div class="grid-container room">
        <div class="grid-child purple">
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

        <div class="grid-child green side">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/livingleft.jpg"
            alt="bag"
            className="dd"
          />
          <h6 className="example one"> 3 Bedroom apartment living area example</h6>
        </div>
        <div class="grid-child pink side">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/livingright.jpg"
            // src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
            className="dd"
          />
          <h6 className='example two'>2  Bedroom apartment living area example</h6>
        </div>
      </div>
    </div>
  );
}

export default Living;
