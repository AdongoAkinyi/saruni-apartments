import "./Residence.css";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function ResidenceHome() {
  let navigate = useNavigate(); 
  return (
    <div class="grid-container-element"> 
      
      <div className="grid-child-element purple">
        <div className="logo-top-left">
        <h4><img
          className="navbar-logo"
          src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />  
       <a href="/" className="the-word">THE SARUNI</a> </h4>
       
        </div>
        <div className="content">
        <img 
          className="navbary-loogo"
          src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
          alt="logo"
          onClick={() => {
            navigate("/");
          }}

        />
        {/* <img  src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png" className="residence-home-logo" alt="logo"/> */}
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
        THE    RESIDENCES
          </button>
        </div>
      </div>

      <div className="grid-child-element green">
      <a href="/menu" className="bars-top-right"><FaBars  /></a>
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
