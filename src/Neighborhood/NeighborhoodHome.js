import './Neighborhood.css'
import { useNavigate } from "react-router-dom";
import { FaBars } from 'react-icons/fa';


function NeighborhoodHome() {
    let navigate = useNavigate();
  return (
    <div class="grid-container-neighbor homepager">
     <div className="grid-child-element green">
     <div className="logo-top-leftt">
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
      <img
      src='http://www.thesaruni.com/TheSaruniImages/neighborhoodhome.jpg'
        // src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iD1GJ2wJYKN4/v0/1200x-1.jpg"
        alt="residence"
        className="residenceimagehome"
      />
    </div>
    <div className="grid-child-element jirani">
      <div className="content jirani">
      <a href="/menu" className="bars-top-right"><FaBars  /></a>

        <img
          src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
          className="residence-home-logo"
          alt="logo"
        />
        <h4 className="jirani-main">N A I R O B I ' S </h4>
        <h4
          className="jirani-main"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          {" "}
          E X C L U S I V E
        </h4>
        <h4
          className="jirani-main"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          {" "}
         A D D R E S S 
        </h4>

        <h5 className="jirani-paragraph">A statement of luxury and prestige </h5>
       

        <button
          onClick={() => {
            navigate("/neighborhood");
          }}
          className="button-46"
        >
          THE NEIGHBORHOOD
        </button>
      </div>
    </div>

   
  </div>
  )
}

export default NeighborhoodHome