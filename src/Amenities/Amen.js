import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import "./Amen.css";

function Amen() {
  let navigate = useNavigate();
  return (
    <div className="kubwa-resident">
      <div>
        <ChildNav />{" "}
      </div>
      <div className="section1">
        <div class="grid-resident-element">
          <div class="grid-child-purple">
            <div className="the-residences">
              <img
                src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
                className="residence-home-logo-grey"
                alt="logo"
              />

              <h6 className="gold-section one">T H E </h6>
              <h1 className="gold-section two"> A M E N I T I E S</h1>
            </div>

            <div className="contentwiser">
              <h1 className="care" style={{ marginTop: "15px" }}>
                C A R E F U L L Y{" "}
              </h1>
              <h1 className="care" style={{ marginTop: "15px" }}>
                C O N S I D E R E D &
              </h1>

              <h1 className="care" style={{ marginTop: "15px" }}>
                M E T I C U L O U S L Y{" "}
              </h1>

              <h1 className="care" style={{ marginTop: "15px" }}>
                D E S I G N E D
              </h1>

              <p className="paragraph-bottom">
                With uninterrupted views from each appartments, 'The Saruni' at
                Riverside Drive, is a modern interpretation of contemporary
                luxury specifically designed to enhance your living exparience
              </p>
            </div>
          </div>
          <div class="grid-child-element green">
            <img
              src="http://www.thesaruni.com/TheSaruniImages/amenities.jpg"
              //   src="https://i.pinimg.com/564x/a8/c2/42/a8c24292df4428d84fdfe57b6637ef84.jpg"
              alt="residence"
              className="childimage"
            />
          </div>
        </div>
      </div>
      <div className="explore">

        <h1
          onClick={() => {
            navigate("/sunrise");
          }}
          className="nav-to"
        >
        <FaAngleDown/>
        
        </h1>
      </div>
    </div>
  );
}

export default Amen;
