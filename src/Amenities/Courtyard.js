import './Extras.css'
// import { useNavigate } from "react-router-dom";
import ChildNav from '../Navbar/ChildNav';
import {  FaAngleDown } from 'react-icons/fa';


function Courtyard() {
  // let navigate = useNavigate();

  return (
    <div>
    <div>
      <ChildNav/>
    </div>
    <div className='amenity2'>
        <h2 className='courtyard'>
            The Courtyard
        </h2>
        
    </div>

    <section className="explore-section">
      <h1 className="explorer">
        <a href='/amenitiesataglance'><FaAngleDown/></a>
       </h1>
      
    </section>
    </div>
  )
}

export default Courtyard