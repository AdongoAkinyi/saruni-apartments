import "./Rooms.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Living() {
  let navigate = useNavigate();

  return (
    <div className="kubwa">
      <div>
        <Navbar />{" "}
      </div>
      <div class="grid-container">
        <div class="grid-child purple">
          <div className="residence-heading">
          <img src="https://thesaruni.com/TheSaruniImages/creamlogo.png" alt="logo" className="room-logo"/>
            <p>THE RESIDENCES</p>
          </div>
          <div className="sidebar-center">
            <h4 className="activelink"  onClick={() => {
            navigate("/livingroom");
          }} >LIVING AREA</h4>
            <h4 onClick={() => {
            navigate("/bedroom");
          }}>BEDROOMS</h4>
            <h4  onClick={() => {
            navigate("/kitchen");
          }}> KITCHEN</h4>
          </div>
          <div className="disclaimer">
          <h4>DISCLAIMER</h4>
          <p>
            These 3 & 2 bedroom aparment artistic impressions or image renders
            contained on this website are for illustrative purposes only and
            should not be relied upon as being complete or accurate
          </p>
          </div>
        </div>

        <div class="grid-child green">
          <img
            src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
          />
        </div>
        <div class="grid-child pink">
          <img
            src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
          />
        </div>

      </div>
    </div>
  );
}

export default Living;
