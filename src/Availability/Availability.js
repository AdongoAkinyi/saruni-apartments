import Navbar from "../Navbar/Navbar";
import "./Availability.css";

function Availability() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div class="grid-container">
        <div className="grid-child avi">
          Grid Column 1
          <div>
            <h1>LUXURY UNITS AVAILABLE </h1>
          </div>
          <div>
            <h2>1 BEDROOM APARTMENTS</h2>
            <ul>
              <li>Starting from 77sqm (829 sqft)</li>
              <li>Beautiful West side facing Courtyard</li>
              <li> Open plan Kitchen fit with European appliances</li>
            </ul>
          </div>
          <div>
            <h2>3 BEDROOM APARTMENTS</h2>
            <ul>
              <li> Starting from 218 sqm (2347sqft)</li>
              <li>DSQ with private access</li>
              <li> Open plan Kitchen fit with European appliances</li>
              <li>Well-ventilated Laundry Yard and </li>
              <li>Beautiful useable sizeable balconies</li>
              <li>
                3 beedrooms have spectacular views both Surbub on North and
                Either East Side City View or West Side Views
              </li>
            </ul>
          </div>
        </div>

        <div class="grid-child kaplan">
          <div>
            <h1>CALL </h1>
            <p>0759278564</p>
            <p>074546634</p>
            <h3>to make your reservation</h3>
          </div>
          <div>
            <h2>2 BEDROOM APARTMENTS</h2>
            <ul>
              <li>Starting from 132sqm (1421sqft)</li>
              <li>DSQ with private access</li>
              <li> Open plan Kitchen fit with European appliances</li>
              <li>Well-ventilated Laundry Yard and </li>
              <li>Beautiful useable sizeable balconies</li>
              <li>
                Amazing views both Surbub on North and Either East Side City
                View or West Side Views
              </li>
            </ul>
          </div>
          <div>
            <h2>4 DUPLEX PENTHOUSES</h2>
            <ul>
              <li> Starting from 623sqm (6706sqft)</li>
              <li>Private Rooftop terrace</li>
              <li>DSQ with private access and well-ventilated</li>
              <li> Open plan Kitchen fit with European appliances</li>
              <li>
                Luxurious West side facing courtyard views East Side City View
                or West Side Views
              </li>
            </ul>
          </div>
          
        </div>
        <div class="grid-child avi">
        <img src="https://i.pinimg.com/564x/ab/b3/00/abb30014282ef028df8e1a51345eaecd.jpg" alt="residence"  className="childimage"/>
        Grid Column 3
        </div>
      </div>
    </div>
  );
}

export default Availability;
