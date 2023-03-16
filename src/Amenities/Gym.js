import './Extras.css'
// import { useNavigate } from "react-router-dom";
import ChildNav from '../Navbar/ChildNav';
import { FaAngleDown } from 'react-icons/fa';


function Gym() {
  // let navigate = useNavigate();

  return (
    <div>
    <div>
      <ChildNav/>
    </div>
    <div className='amenity1'>
        <h2 className='gym'>
            The Gym
        </h2>
        
    </div>  

    <section className="explore-section">
      <h1 className="explorer">
        <a href='/courtyard'><FaAngleDown/></a>
       </h1>
      
    </section>
    </div>
    
  )
}

export default Gym