import { FaAngleDown } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import "./Amenitieschild.css";
import Courtyard from "./Courtyard";
import Gym from "./Gym";
import Pool from "./Pool"; 

function InfinityPool() {
  // let navigate = useNavigate();
  return (
    <div className="kubwaest">
      <div>
        <ChildNav />{" "}
      </div>
      <section className="section1">
        <div class="griddp-container-element">
          <div class="grid-child-element purn">
            <div className="the-residences">
              <img
                src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
                className="residence-home-logo-grey"
                alt="logo"
              />

              <h6 className="gold-section one">T H E </h6>
              <h1 className="gold-section two"> A M E N I T I E S</h1>
            </div>

            <div className="amen-3">
              <div className="ring">
                <h1 className="carey">CURATED FOR</h1>
                <h1 className="carey">LEISURE, </h1>
                <h1 className="carey">WELLNESS AND </h1>
                <h1 className="carey">REJUVINATION</h1>
              </div>
              <p className="paragraph-infi">
                The heated infinity swimming pool
              </p>
              <p className="paragraph-infi">The  Gym</p>
              <p className="paragraph-infi"> The Courtyard</p>
            </div>
          </div>
          {/* POOL */}
          <div class="grid-child-element green">
            <Pool/>
          </div>
          <div class="grid-child greener">
          <Gym/>
        </div>
        {/* courtyard */}
        <div class="grid-child pinker">
          <Courtyard/>
      
        </div>
        </div>
      </section>

      <section className="explore-section">
        <h1 className="explorer">
          <a href="/neighborhood" className="downarrow">
            <FaAngleDown />
          </a>
        </h1>
      </section>
    </div>
  );
}

export default InfinityPool;
