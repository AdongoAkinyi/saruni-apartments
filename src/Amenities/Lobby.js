import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import "./Amenitieschild.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Lobby() {
  let navigate = useNavigate();
  return (
    <div className="kubwa-resident">
      <div>
        <ChildNav />{" "} 
      </div>
      <div className="flexbox-container-all-amenities">


        <div className="flexbox-item-allamenities1">
          <div className="the-neighboorhoodd">
            <img
              src="http://testdeploy.thesaruni.com/logogrey.png"
              className="residence-neigh-logo-grey"
              alt="logo"
            />

            <h6 className="gold-secttionn one">T H E </h6>
            <h1 className="gold-secttionn one"> A M E N I T I E S</h1>
          </div>

          <div className="amenw-3">
          <div  className="top-c">
            {/* <h1 className="amenities-details">CURATED FOR LEISURE, WELLNESS AND REJUVEANATION</h1> */}
            <h1 className="amenities-details">CURATED FOR</h1>
              <h1 className="amenities-details">LEISURE, </h1>
              <h1 className="amenities-details">WELLNESS AND </h1>
              <h1 className="amenities-details">REJUVENATION</h1>
          </div>
            <div className="am">
              <h4
                className="amenitieslink"
                onClick={() => {
                  navigate("/lobby");
                }}
              > 
                The Lobby
              </h4>
              <h4
              id="amenity"
                onClick={() => {
                  navigate("/infinitypool");
                }}
                
              >
                The Heated Infinity Swimming Pool
              </h4>
              <h4
                onClick={() => {
                  navigate("/courtyard");
                }}
                id="amenity"
              >
                {" "}
                The Courtyard
              </h4>
              <h4
                onClick={() => {
                  navigate("/courtyard");
                }}
                id="amenity"
              >
                {" "}
                The Gym
              </h4>
              <h4
                onClick={() => {
                  navigate("/eastwardskygarden");
                }}
                id="amenity"
              >
                {" "}
                The Eastward Sky Garden
              </h4>
              <h4
                onClick={() => {
                  navigate("/courtyard");
                }}
                id="amenity"
              >
                {" "}
                The Westward Sky Garden
              </h4>
            </div>
          </div>
        </div>



        <div className="flexbox-item-allamenities2">
          <img
            src="http://testdeploy.thesaruni.com/amenities.jpg"
            alt="amenities"
            className="imageslide"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Lobby;
