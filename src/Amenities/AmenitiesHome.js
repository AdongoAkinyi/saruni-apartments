import './Amenities.css'
import { useNavigate } from "react-router-dom";

function AmenitiesHome() {
    let navigate = useNavigate();
  return (
    <div class="grid-container-element">
    <div class="grid-child-element purple">
    <div className="content">
    <img src='http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png' className='amenity-logo'/>
    <h4 className='reside'>A LIFESTYLE METICULOUSLY CURATED</h4>
      <h5> for the most discerning urban connoiseur</h5>
      <button  onClick={()=>{ navigate('/amenities')}} className='button-46'>THE AMENITIES</button>
    </div>
    
    </div>
    <div class="grid-child-element green">
        <img src="https://i.pinimg.com/564x/ab/b3/00/abb30014282ef028df8e1a51345eaecd.jpg" alt="residence"  className="childimage"/>
    </div>
</div>
  )
}

export default AmenitiesHome