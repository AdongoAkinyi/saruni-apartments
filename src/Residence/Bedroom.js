import "./Rooms.css";
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";

function Bedroom() {
  let navigate = useNavigate();

  return (
    <div className="kubwa">
    <div>
      <ChildNav />{" "}
    </div>
    <div class="grid-container">
      <div class="grid-child purple">
      <div className="the-residences">
          <img  
              src="https://thesaruni.com/TheSaruniImages/logowhite.png"
          className="residence-home-logo-grey" alt="logo"/>
 
         <h6 className="gold-section one">T H E </h6>
            <h1 className="gold-section two"> R E S I D E N C E S</h1>
          </div>

        <div className="sidebar-center">
          <h4
            id='rooms'
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
            id='rooms'
          >
            {" "}
            KITCHEN
          </h4>
        </div>
        <div className="paragraph-bottom-disclaimer">
          <h4 style={{marginBottom:"20px"}} id="disclaimer">DISCLAIMER</h4>
          <p style={{fontWeight:"20px"}} id="disclaimer">
            These 3 & 2 bedroom aparment artistic impressions or image renders
            contained on this website are for illustrative purposes only and
            should not be relied upon as being complete or accurate
          </p>
        </div>
      </div>

      <div class="grid-child green">
      <img
          src="http://www.thesaruni.com/TheSaruniImages/bedleft.jpg"

            // src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
            className="dd"
          />
          2 Bedroom apartment living area example
      </div>
      <div class="grid-child pink">
      <img
          src="http://www.thesaruni.com/TheSaruniImages/bedright.jpg"

            // src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
            className="dd"
          />
          2 Bedroom apartment living area example
      </div>
    </div>
   
  </div>
  );
}

export default Bedroom;
