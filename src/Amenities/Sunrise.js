import "./Sun.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ChildNav from "../Navbar/ChildNav";
import { FaAngleDown } from "react-icons/fa";

function Sunrise() {
  let navigate = useNavigate();

  return (
    <div className="kubwa-sun">
      <div>
        <ChildNav />{" "}
      </div>
      <div class="grid-container-sun">
        <div class="grid-child purple">
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
            <p className="sunner">Wake up to the sunrise on the East</p>
          </div>

          <div className="disclaimer">
            <h4 className="eastward">T H E </h4>
            <h4 className="eastward">E A S T W A R D </h4>
            <h4 className="eastward"> G A R D E N</h4>
            <p className="east-gard">
              is located on the 9th and 10th floor and presents amazing views of
              the Nairobi CBD area.
            </p>
          </div>
        </div>

        <div class="grid-child green">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/wakeupleft.jpg"
            // src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
            className="dd"
          />
          <p>View from outside</p>
        </div>
        <div class="grid-child pink">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/wakeupright.jpg"
            // src="https://i.pinimg.com/564x/93/3b/22/933b22054916574e7d3d5ecf694597a0.jpg"
            alt="bag"
            className="dd"
          />
          <p>View from outside</p>
        </div>
      </div>

      <section className="explore-section">
        <h1 className="explorer">
          <a href="/sunset">
            <FaAngleDown />
          </a>
        </h1>
      </section>
    </div>
  );
}

export default Sunrise;
