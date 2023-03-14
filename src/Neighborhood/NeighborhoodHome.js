import './Neighborhood.css'
import { useNavigate } from "react-router-dom";


function NeighborhoodHome() {
    let navigate = useNavigate();
  return (
    <div class="grid-container-element">
     <div class="grid-child-element green">
        <img 
        src='https://i.pinimg.com/564x/15/e6/77/15e67736f55c790282f4fc1767adb177.jpg'
        // src="https://i.pinimg.com/564x/77/b8/13/77b813e4d5b92621e27ec4fa0c8983b0.jpg"
         alt="residence"  className="childimage"/>
    </div>
    <div class="grid-child-element purple">
    <div className="content">
    <img src='http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png' className='neigh-logo'/>

    <h4 className='reside'>NAIROBI'S EXCLUSIVE ADDRESS</h4>
      <h5> A statement of luxury and prestige</h5>
      <button   onClick={()=>{ navigate('/neighborhood')}} className='button-46'>THE NEIGHBORHOOD</button>
    </div>
    
    </div>
   
</div>
  )
}

export default NeighborhoodHome