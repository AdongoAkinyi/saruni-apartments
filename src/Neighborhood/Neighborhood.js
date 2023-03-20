import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import Navbar from "../Navbar/Navbar";
import   './Neighborhoodchild.css'

function Neighborhood() {
    let navigate = useNavigate();

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
          src="http://www.thesaruni.com/TheSaruniImages/logogrey.png" 
          className="residence-neigh-logo-grey" alt="logo"/>
 
         <h6 className="gold-secttion one">T H E </h6>
            <h1 className="gold-secttion two"> N E I G H B O R H O O D</h1>
            
          </div>
            <div className="contenting">
              <h2 className="exclude">AN    EXCLUSIVE </h2>
         

              <h2 className="excluder">ADDRESS</h2>

            </div>
            <div className="coddle">
              <p className="coddler">
                Coddled by nature on the edge of Nairobi River, 'The Saruni', is
                a tranquil refuge located on Nairobi's coveted Riverside Drivee;
                A secluded preference for embasies, diplomatic organizations and
                professional companies.
              </p>
              <p className="coddler bot">
                Riverside drove is a premium expression of privacy, prestige and
                convenience.
              </p>
            </div>
          </div>

          <div class="grid-child-element green">
            <img
            src="http://www.thesaruni.com/TheSaruniImages/neigbourhood.jpg"
              alt="residence"
              className="childimage homeneigh"
            />
          </div>
        </div>
      </section>

      <section className="explore-section">
      <h1 className="explorer">
        <a href='/map' className="downarrow jir">EXPLORE  MAP<FaAngleDown/></a>
       </h1>
      
    </section>
    </div>
  );
}

export default Neighborhood;
