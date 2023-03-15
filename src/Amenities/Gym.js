import './Extras.css'
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import ChildNav from '../Navbar/ChildNav';


function Gym() {
  let navigate = useNavigate();

  return (
    <div>
    <div>
      <ChildNav/>
    </div>
    <div className='amenity1'>
        <h2>
            The Gym
        </h2>
        
    </div>

<section className="explore-section">
      <h1 className="explore">EXPLORE</h1>
      <div className="arrow" onClick={() => {
          navigate("/courtyard");
        }} >
        <span></span>
        <span></span>
      </div>
    </section>
    </div>
    
  )
}

export default Gym