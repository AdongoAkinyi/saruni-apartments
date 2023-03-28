import { FaAngleDown } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";

import "./Neighborhoodchild.css";

function Neighborhood() {


  return ( 
    <div className="kubwa">
      <div>
        <ChildNav />{" "}  
      </div>
      <section className="section1">
        <div class="grid-coontainer-element">
          <div class="grid-child-element puple"> 
            <div className="the-neighboorhood">
              <img
                src="http://testdeploy.thesaruni.com/logogrey.png"
                className="residence-neigh-logo-grey"
                alt="logo"  
                style={{marginLeft:"19px"}}
              /> 

              <h6 className="gold-secttionn one">T H E </h6>
              <h1 className="gold-secttionnh  two"> N E I G H B O R H O O D</h1>
            </div>
            <div className="contenting">
              <h2 className="exclude">AN EXCLUSIVE </h2>

              <h2 className="excluder">ADDRESS</h2>
            </div>
            <div className="coddlenature">
              <p className="coddlernature">
                Coddled by nature on the edge of Nairobi River, 'The Saruni', is
                a tranquil refuge located on Nairobi's coveted Riverside Drive;
                A secluded preference for embasies, diplomatic organizations and
                professional companies.
               </p>
              <p className="coddlernature botn">
                Riverside drove is a premium expression of privacy, prestige and
                convenience.
              </p>
            </div>
          </div>

          <div class="grid-child-element green">
            <img
              src="http://testdeploy.thesaruni.com/neigbourhood.jpg"
              alt="residence"
              className="childimage homeneigh"
              loading="lazy"

            />
          </div>
        </div>
      </section>

      <section className="explore-section">
        <h1 className="explorer">
          <a href="/map" className="downarrow jir">
            EXPLORE MAP
            <FaAngleDown />
          </a>
        </h1>
      </section>
    </div>
  );
}

export default Neighborhood;
