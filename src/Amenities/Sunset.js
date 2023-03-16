import { FaAngleDown } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import "./Sun.css";

function Sunset() {
  // let navigate = useNavigate();
  return (
    <div className="kubwa-sun">
    <div>
      <ChildNav />{" "}
    </div>
    <div class="grid-container-sun">
      <div class="grid-child purple" style={{marginRight:"15px"}}>
        <div className="the-sun">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
            className="residence-home-logo-grey"
            alt="logo"
          />

          <h6 className="brown-section one">T H E </h6>
          <h1 className="brown-section two"> S P E C T A C U L A R</h1>
          <h1 className="brown-section two"> S K Y G A R D E N S</h1>
        </div>

        <div className="center1">
          <p className="sunner">Wind down to the sunset on the west</p>
        </div>





        <div className="disclaimer">
          <h4 className="eastward">T H E </h4>
          <h4 className="eastward">W E S T  W  A  R D</h4>
          <h4 className="eastward"> G A R D E N</h4>
          <p className="east-gard">
          is located on the 12th and 13th floor facing the plush Lavington
              area and its environs
          </p>
        </div>
      </div>

      <div class="grid-child green" >
      <img
            src="http://www.thesaruni.com/TheSaruniImages/sundownledt.jpg"
            // src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
            className="ddsun"
          />
          <p className="example">View from outside</p>
      </div>
      <div class="grid-child pink">
      <img
            src="http://www.thesaruni.com/TheSaruniImages/sundownright.jpg"
            alt="bag"
            className="ddsun"
          />
          <p className="example" style={{textAlign:"right"}}>View from outside</p>
      </div>
    </div>

    <section className="explore-section">
      <h1 className="explorer">
        <a href="/amenitiesinfinity">
          <FaAngleDown />
        </a>
      </h1>
    </section>
  </div>

    
  );
}

export default Sunset;
