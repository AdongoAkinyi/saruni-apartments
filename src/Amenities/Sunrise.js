import "./Sun.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


function Sunrise() {
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
            <p>Wake up to the sunrise on the East</p>
          </div>

          <div className="disclaimer">
            <h4>THE EASTWARD GARDEN</h4>
            <p>
              is located on the 9th and 10th floor and presents amazing views of
              the Nairobi CBD area.
            </p>
          </div>
        </div>

        <div class="grid-child green">
          <img
          src="https://i.pinimg.com/564x/d7/90/73/d79073b18b7d20aee6432158fcd33e3c.jpg"
            // src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
          />
        </div>
        <div class="grid-child pink">
          <img
          src="https://i.pinimg.com/564x/d7/90/73/d79073b18b7d20aee6432158fcd33e3c.jpg"
            // src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
          />
        </div>
      </div>

      <section className="explore-section">
        <h1 className="explore">EXPLORE</h1>
        <div
          className="arrow"
          onClick={() => {
            navigate("/sunset");
          }}
        >
          <span></span>
          <span></span>
        </div>
      </section>
    </div>
  );
}

export default Sunrise;
