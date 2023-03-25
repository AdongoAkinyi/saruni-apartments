import "./Amenitieschild.css";
// import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import { FaAngleDown } from "react-icons/fa";

function Amenities() {
  // let navigate = useNavigate();
  return (
    <div className="kubwaest">
      <div> 
        <ChildNav />{" "}
      </div>
      <section className="section1">
        <div class="gridd-container-element">
          <div class="grid-child-element purn">
            <div className="the-amenities ties">
              <img
                src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
                className="amenities-home-logo-grey"
                alt="logo"
              />

              <h6 className="amen-section one">T H E </h6>
              <h1 className="amen-section two"> A M E N I T I E S</h1>
            </div>

            <div className="amenw-3">
              <div className="ring">
                <h1 className="carey">C A R E F U L L Y</h1>
                <h1 className="carey">C O N S I D E R E D & </h1>
                <h1 className="carey">M E T I C U L O U S L Y </h1>
                <h1 className="carey">D E S I G N E D</h1>
              </div>

              <p className="paragraph-bottommer">
                With uninterrupted views from each apartment, 'The Saruni' at
                Riverside Drive, is a modern interpretation of contemporary
                luxury specifically designed to enhance your living experience
              </p>
            </div>
          </div>

          <div class="grid-child-element green lobby">
            <img
              src="http://www.thesaruni.com/TheSaruniImages/amenities.jpg"
              alt="amenities"
              className="childimage"
              loading="lazy"

            />
          </div>
        </div>
      </section>

      <section className="explore-section">
        <h1 className="explorer">
          <a href="/amenitiesataglance" className="downarrow">
            <FaAngleDown />
          </a>
        </h1>
      </section>
    </div>
  );
}

export default Amenities;
