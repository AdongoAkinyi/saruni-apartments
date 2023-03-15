import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import Navbar from "../Navbar/Navbar";
import "./Sun.css";

function Sunset() {
  let navigate = useNavigate();
  return (
    <div className="kubwa">
      <div>
        <ChildNav />{" "}
      </div>
      <div class="grid-container">
        <div class="grid-child purple">
          <div className="skygardens">
            <p>THE SPECTACULAR SKYGARDENS</p>
          </div>
          <div className="center1">
            <p>Wind down to the sunset on the west</p>
          </div>

          <div className="disclaimer">
            <h4>THE WESTWARD GARDEN</h4>
            <p>
              is located on the 12th and 13th floor facing the plush Lavington
              area and its environs
            </p>
          </div>
        </div>

        <div class="grid-child green">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/sundownledt.jpg"
            // src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
            className="dd"
          />
          2 Bedroom apartment living area example
        </div>
        <div class="grid-child pink">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/sundownright.jpg"
            alt="bag"
            className="dd"
          />
          2 Bedroom apartment living area example
        </div>
      </div>

      <section className="explore-section">
        <h1 className="explore">EXPLORE</h1>
        <div
          className="arrow"
          onClick={() => {
            navigate("/amenitiesinfinity");
          }}
        >
          <span></span>
          <span></span>
        </div>
      </section>
    </div>
  );
}

export default Sunset;
