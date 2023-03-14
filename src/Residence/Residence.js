import { useNavigate } from "react-router-dom";
import "./Residencechild.css";
import ChildNav from "../Navbar/ChildNav";

function Residence() {
  let navigate = useNavigate();
  return (
    <div className="kubwa">
      <div> 
        <ChildNav  />{" "}
      </div>
      <section className="section1">
      <div class="grid-container-element">
        <div class="grid-child-element purple">
          <div className="content-1">
         
            <h1>THE RESIDENCES</h1>
          </div>
          <div className="content-2">
          <h1  className="luxury">LUXURY</h1>
          <h1 className="units">UNITS</h1>
            
          </div>
          <div className="content-3">
            <h1>CAREFULLY CONSIDERED & METICULOUSLY DESIGNED</h1>
            <p>
              With uninterrupted views from each appartments, 'The Saruni' at
              Riverside Drive, is a modern interpretation of contemporary luxury
              specifically designed to enhance your living exparience
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
        <div className="arrow" onClick={() => {
            navigate("/livingroom");
          }} >
          <span></span>
          <span></span>
        </div>
      </section>
    
    </div>
  );
}

export default Residence;
