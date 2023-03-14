import './Extras.css'
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar';


function Courtyard() {
  let navigate = useNavigate();

  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <div className='amenity2'>
        <h2>
            The Courtyard
        </h2>
        
    </div>

<section className="explore-section">
      <h1 className="explore">EXPLORE</h1>
      <div className="arrow" onClick={() => {
          navigate("/neighborhood");
        }} >
        <span></span>
        <span></span>
      </div>
    </section>
    </div>
  )
}

export default Courtyard