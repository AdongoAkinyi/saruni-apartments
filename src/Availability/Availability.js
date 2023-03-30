import ChildNav from "../Navbar/ChildNav";
import "./Availability.css";
// import { useNavigate } from "react-router-dom";

function Availability() {
  // let navigate = useNavigate();

  return (
    <div>
      <div>
        <ChildNav />
      </div>
      <div class="flexbox-container-availability">
        <div className="flexbox-item-availability1 avi">
          <div className="headingsss">
            <div className="lux-head">
              <h1 className="topic-lux">L U X U R Y </h1>
              <h1 className="topic-lux">U N I T S </h1>
              <h1 className="topic-lux">A V A I L A B L E </h1>
            </div>
            <div className="lux-head">
              <h1 className="topic-lux">C A L L </h1>
              <p className="topic-luxx">+254 759 278 564</p>
              <p className="topic-luxx">+254 745 466 346</p>
              <h3 className="topic-lux-reserve">to make your reservation</h3>
            </div>
          </div>
          {/* <div className="flexbox-child-item">
            <div  className="flexbox-lux-heading1">
              {" "}
              <h1 className="topic-lux">L U X U R Y </h1>
              <h1 className="topic-lux">U N I T S </h1>
              <h1 className="topic-lux">A V A I L A B L E </h1>
            </div>
            <div className="flexbox-lux-heading2">
            <h1 className="topic-lux">C A L L </h1>
              <p className="topic-luxx">+254 759 278 564</p>
              <p className="topic-luxx">+254 745 466 346</p>
              <h3 className="topic-lux-reserve">to make your reservation</h3>
            </div>
          </div> */}

          <div className="sect-body">
            <div className="body-one">
              <div className="lux-body-upjuu">
                {/* <h1>1</h1> */}
                <h2 className="body-lux tittle">
                  {" "}
                  <p className="number" style={{ display: "inline" }}>
                    {" "}
                    1
                  </p>{" "}
                  BEDROOM APARTMENTS
                </h2>

                <ul>
                  <li className="body-lux one">
                    Starting from 77sqm (829 sqft)
                  </li>
                  <li className="body-lux one">
                    Beautiful West side facing Courtyard
                  </li>
                  <li className="body-lux one">
                    {" "}
                    Open plan Kitchen fit with European appliances
                  </li>
                </ul>
              </div>
              <div className="lux-body-upple">
                <h2 className="body-lux tittle">
                  <p className="number" style={{ display: "inline" }}>
                    {" "}
                    2
                  </p>{" "}
                  BEDROOM APARTMENTS
                </h2>
                <ul>
                  <li className="body-lux one">
                    Starting from 132sqm (1421sqft)
                  </li>
                  <li className="body-lux one">DSQ with private access</li>
                  <li className="body-lux one">
                    {" "}
                    Open plan Kitchen fit with European appliances
                  </li>
                  <li className="body-lux one">
                    Well-ventilated Laundry Yard and{" "}
                  </li>
                  <li className="body-lux one">
                    Beautiful useable sizeable balconies
                  </li>
                  <li className="body-lux one">
                    Amazing views both Surbub on North and Either East Side City
                    View or West Side Views
                  </li>
                </ul>
              </div>
            </div>

            <div className="body-two">
              <div className="lux-body-updown">
                <h2 className="body-lux tittle">
                  <p className="number" style={{ display: "inline" }}>
                    {" "}
                    3
                  </p>{" "}
                  BEDROOM APARTMENTS
                </h2>
                <ul>
                  <li className="body-lux one">
                    {" "}
                    Starting from 218 sqm (2347sqft)
                  </li>
                  <li className="body-lux one">DSQ with private access</li>
                  <li className="body-lux one">
                    {" "}
                    Open plan Kitchen fit with European appliances
                  </li>
                  <li className="body-lux one">
                    Well-ventilated Laundry Yard and{" "}
                  </li>
                  <li className="body-lux one">
                    Beautiful useable sizeable balconies
                  </li>
                  <li className="body-lux one">
                    3 beedrooms have spectacular views both Surbub on North and
                    Either East Side City View or West Side Views
                  </li>
                </ul>
              </div>

              <div className="lux-body">
                <h2 className="body-lux tittle">
                  <p className="number" style={{ display: "inline" }}>
                    {" "}
                    4
                  </p>{" "}
                  DUPLEX PENTHOUSES
                </h2>
                <ul>
                  <li className="body-lux one">
                    {" "}
                    Starting from 623sqm (6706sqft)
                  </li>
                  <li className="body-lux one">Private Rooftop terrace</li>
                  <li className="body-lux one">
                    DSQ with private access and well-ventilated
                  </li>
                  <li className="body-lux one">
                    {" "}
                    Open plan Kitchen fit with European appliances
                  </li>
                  <li className="body-lux one">
                    Luxurious West side facing courtyard views East Side City
                    View or West Side Views
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flexbox-item-availability2 avik">
          <img
            src="http://testdeploy.thesaruni.com/avilability.jpg"
            alt="residence"
            className="neighborhood-profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Availability;
