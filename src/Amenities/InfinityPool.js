import { FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import "./Amenitieschild.css";
import Courtyard from "./Courtyard";
import Gym from "./Gym";
import Pool from "./Pool";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function InfinityPool() {
  let navigate = useNavigate();
  return (
    <div className="kubwaest">
      <div>
        <ChildNav />{" "}
      </div>
      <section className="section1">
        <div class="griddp-container-element">
          <div class="grid-child-element purn">
            <div className="the-neighboorhoodd">
              <img
                src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
                className="residence-neigh-logo-grey"
                alt="logo"
              />

              <h6 className="gold-secttionn one">T H E </h6>
              <h1 className="gold-secttionn two"> A M E N I T I E S</h1>
            </div>

            <div className="amenww-3">
              <div className="ring">
                <h1 className="careyy">CURATED FOR</h1>
                <h1 className="careyy">LEISURE, </h1>
                <h1 className="careyy">WELLNESS AND </h1>
                <h1 className="careyy">REJUVINATION</h1>
              </div>
              <p className="paragraph-infi">
                The heated infinity swimming pool
              </p>
              <p className="paragraph-infi">The Gym</p>
              <p className="paragraph-infi"> The Courtyard</p>
            </div>
          </div>
          {/* POOL */}
          <div class="grid-child-element green">
            <Carousel infiniteLoop>
              <div>
                <Pool />
                <p className="legend" style={{ backgroundColor: "goldenrod" }}>
                  The pool
                </p>
              </div>
              <div>
                <Courtyard />
                <p className="legend" style={{ backgroundColor: "goldenrod" }}>
                  The Courtyard
                </p>
              </div>
              <div>
                <Gym />
                <p className="legend" style={{ backgroundColor: "goldenrod" }}>
                  The Gym
                </p>
              </div>
            </Carousel>
            <div
              className="explore"
              onClick={() => {
                navigate("/menu");
              }}
            >
              <h1
                className="nav-to"
                style={{
                  fontWeight: "normal",
                  fontSize: "25px",
                  marginTop: "-23px",
                }}
              >
                GO TO MENU <FaAngleUp style={{ marginRight: "20px" }} />
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfinityPool;
