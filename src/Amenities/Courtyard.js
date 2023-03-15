import './Extras.css'
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import ChildNav from '../Navbar/ChildNav';


function Courtyard() {
  let navigate = useNavigate();

  return (
    <div>
    <div>
      <ChildNav/>
    </div>
    <div className='amenity2'>
        <h2>
            The Courtyard
        </h2>
        
    </div>

<section className="explore-section">
      <h1 className="explore" onClick={() => {
          navigate("/neighborhood");
        }}>EXPLORE</h1>
      <div className="arrow"  >
        <span></span>
        <span></span>
      </div>
    </section>
    </div>
  )
}

export default Courtyard