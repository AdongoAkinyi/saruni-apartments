import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Sun.css";

function Sunset() {
  let navigate = useNavigate();
  return (
    <div className="kubwa">
      <div>
        <Navbar />{" "}
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
          src="https://i.pinimg.com/564x/43/55/e8/4355e804f85240ada110aa891f9dfcb0.jpg"
          // src="https://i..com/564x/d7/90/73/d79073b18b7d20aee6432158fcd33e3c.jpg"
            alt="bag"
          />
        </div>
        <div class="grid-child pink">
          <img
          src="https://i.pinimg.com/564x/43/55/e8/4355e804f85240ada110aa891f9dfcb0.jpg"
          // src="https://i.pinimg.com/564x/d7/90/73/d79073b18b7d20aee6432158fcd33e3c.jpg"
            alt="bag"
          />
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
