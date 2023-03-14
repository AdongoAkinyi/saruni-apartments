import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import   './Neighborhoodchild.css'

function Neighborhood() {
    let navigate = useNavigate();

  return (
    <div className="kubwa">
      <div>
        <Navbar />{" "}
      </div>
      <section className="section1">
        <div class="grid-container-element">
          <div class="grid-child-element purple">
            <div className="content-1">
              <h1>THE NEIGHBORHOOD</h1>
            </div>
            <div className="content-2">
              <h2>AN EXCLUSIVE ADDRESS</h2>
            </div>
            <div className="content-3">
              <p>
                Coddled by nature on the edge of Nairobi River, 'The Saruni', is
                a tranquil refuge located on Nairobi's coveted Riverside Drivee;
                A secluded preference for embasies, diplomatic organizations and
                professional companies.
              </p>
              <p>
                Riverside drove is a premium expression of privacy, prestige and
                convenience.
              </p>
            </div>
          </div>
          <div class="grid-child-element green">
            <img
              src="https://i.pinimg.com/564x/a8/c2/42/a8c24292df4428d84fdfe57b6637ef84.jpg"
              alt="residence"
              className="childimage"
            />
          </div>
        </div>
      </section>

      <section className="explore-section">
        <h1 className="explore">EXPLORE</h1>
        <div
          className="arrow"
          onClick={() => {
            navigate("/map");
          }}
        >
          <span></span>
          <span></span>
        </div>
      </section>
    </div>
  );
}

export default Neighborhood;
