import './Ataglance.css'
import Navbar from "../Navbar/Navbar";
import ChildNav from '../Navbar/ChildNav';

function AtaGlance() {
  return (
    <div className="kubwa">
      <div>
        <ChildNav />{" "}
      </div>
      <div className="section1">
        <div class="grid-container-element">
          <div class="grid-child-element purple">
            <div className="glance1">
              <h1>AMENITIES AT A GLANCE</h1>
            </div>
            <div className="glance 2">
              <div className="logosection">
                <h1>LEISURE</h1>
              </div>
              <div className="list-amenities">
                <ul>
                  <li>Reception lobby and management office</li>
                  <li>2 High speed lifts</li>
                  <li>
                    24Hr Security services at the gate and on property intercom
                  </li>
                  <li>Ample Parking</li>
                  <li>Full backup generator</li>
                  <li>24 Hr CCTV</li>
                  <li>Perimeter electric fence</li>
                  <li>Borehole</li>
                </ul>
              </div>
            </div>
            
            <div className="glance 3">
              <div className="logosection">
                <h1>WELLNESS</h1>
              </div>
              <div className="list-amenities">
                <ul>
                  <li>Modern fitted gym</li>
                  <li>Sauna</li>
                  <li>Steam Room</li>
                </ul>
              </div>
            </div>
            <div className="glance 4">
              <div className="logosection">
                <h1>REJUVENATION</h1>
              </div>
              <div className="list-amenities">
                <ul>
                  <li>East and West Skygardens</li>
                  <li>Infinity Heated poool</li>
                  <li>Ground level manicured and landscaped coutyard garden</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="grid-child-element green">
            <img
                      src="http://www.thesaruni.com/TheSaruniImages/avilability.jpg"

              // src="https://i.pinimg.com/564x/a8/c2/42/a8c24292df4428d84fdfe57b6637ef84.jpg"
              alt="residence"
              className="childimage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AtaGlance;
