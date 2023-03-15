import "./Residence.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function ResidenceHome() {
  let navigate = useNavigate();
  return (
    <div class="grid-container-element"> 
    
      <div className="grid-child-element purple">
        <div className="content">
        <img  src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png" className="residence-home-logo" alt="logo"/>
          <h4 className="reside">R E S I D E  </h4>
          <h4 className="reside" style={{marginTop:"15px", marginBottom:"15px"}}> I  N  
          
            L U X U R Y</h4>
          
          <h5 className="reside-paragraph"> surrounded by spectacular </h5>
          <h5 className="reside-paragraph" style={{marginTop:"15px", marginBottom:"15px"}}>  uninterrupted views</h5>

          <button
            onClick={() => {
              navigate("/residence");
            }}
            className="button-46"
          >
            THE RESIDENCES
          </button>
        </div>
      </div>

      <div className="grid-child-element green">
        <img
        src="http://www.thesaruni.com/TheSaruniImages/residencehome.jpg"
          // src="https://i.pinimg.com/564x/e2/4d/33/e24d33bf0e8d0c0970a4452d7ce8f8d9.jpg"
          alt="residence"
          className="residenceimagehome"
          
        />
      </div>
    </div>
    
  );
}

export default ResidenceHome;
