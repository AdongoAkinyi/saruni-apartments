import { FaAngleDown } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import "./Amenitieschild.css";
import Courtyard from "./Courtyard";
import Gym from "./Gym";
import Pool from "./Pool"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function InfinityPool() {
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
              <p className="paragraph-infi">The  Gym</p>
              <p className="paragraph-infi"> The Courtyard</p>
            </div>
          </div>
          {/* POOL */}
          <div class="grid-child-element green">

          <Carousel infiniteLoop>
                <div>
                <Pool/> 
                    <p className="legend">The pool</p>
                </div>
                <div>
                <Courtyard/>
                    <p className="legend">The Courtyard</p>
                </div>
                <div>
                <Gym/>
                    <p className="legend">The Gym</p>
                </div>
            </Carousel>
           
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
