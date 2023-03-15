import { useNavigate } from "react-router-dom";
import "./Residencechild.css";
import ChildNav from "../Navbar/ChildNav";

function Residence() {
  let navigate = useNavigate();
  return (
    <div className="kubwa-resident"> 
      <div> 
        <ChildNav  />{" "}
      </div>
      <div className="section1">
      <div class="grid-resident-element">
        <div class="grid-child-purple">
          <div className="the-residences">
          <img  
          src="http://www.thesaruni.com/TheSaruniImages/logogrey.png" 
          className="residence-home-logo-grey" alt="logo"/>
 
         <h6 className="gold-section one">T H E </h6>
            <h1 className="gold-section two"> R E S I D E N C E S</h1>
          </div>
          
          <div className="contentarea">
          <h1  className="luxury" style={{marginTop:"30px"}}>L  U X U R Y</h1>
          <h1 className="luxury" style={{marginTop:"15px"}}>U N I T S</h1>
            
          </div>
          <div className="conten-twise">
            <h1 className="care" style={{marginTop:"15px"}}>CAREFULLY </h1>
            <h1 className="care" style={{marginTop:"15px"}}>CONSIDERED &</h1>

            <h1 className="care" style={{marginTop:"15px"}}>METICULOUSLY </h1>

            <h1 className="care" style={{marginTop:"15px"}}>DESIGNED</h1>

          
            <p className="paragraph-bottom">
              With uninterrupted views from each appartments, 'The Saruni' at
              Riverside Drive, is a modern interpretation of contemporary luxury
              specifically designed to enhance your living exparience
            </p>
          </div>
        </div>
        <div class="grid-child-element green">
          <img
          src="http://www.thesaruni.com/TheSaruniImages/residenceluxury.jpg"
            // src="https://i.pinimg.com/564x/a8/c2/42/a8c24292df4428d84fdfe57b6637ef84.jpg"
            alt="residence"
            className="childimage"
          />
        </div>
      </div>
      </div>
      <div className="explore">
        <h1
          onClick={() => {
            navigate("/livingroom");
          }}
       className='nav-to' >
          EXPLORE
        </h1>
      </div>
    </div>
  );
}

export default Residence;
