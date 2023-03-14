import "./Residence.css";
import { useNavigate } from "react-router-dom";

function ResidenceHome() {
  let navigate = useNavigate();
  return (
    <div class="grid-container-element">
      <div class="grid-child-element purple">
        <div className="content">
        <img  src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png" className="residence-home-logo"/>
          <h4 className="reside">RESIDE IN LUXURY</h4>
          <h5 className="reside paragraph"> surrounded by spectacular uninterrupted views</h5>
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
      <div class="grid-child-element green">
        <img

          src="https://i.pinimg.com/564x/e2/4d/33/e24d33bf0e8d0c0970a4452d7ce8f8d9.jpg"
          alt="residence"
          className="residenceimagehome"
        />
      </div>
    </div>
  );
}

export default ResidenceHome;
