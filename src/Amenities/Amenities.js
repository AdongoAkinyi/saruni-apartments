import './Amenitieschild.css'
import { useNavigate } from "react-router-dom";
import ChildNav from '../Navbar/ChildNav';
import { FaAngleDown } from 'react-icons/fa';

 
function Amenities() {
    let navigate = useNavigate();
  return (
    <div className="kubwaest">
    <div> 
      <ChildNav />{" "}
    </div>
    <section className="section1">
    <div class="gridd-container-element">
      <div class="grid-child-element purn">
        <div className="contenter1">
        
        <img 
          src="http://www.thesaruni.com/TheSaruniImages/logogrey.png" 

        // src="https://thesaruni.com/TheSaruniImages/sarunigrey.png"
         alt="logo" className="rolog"/>

          <h1 style={{marginTop:"90px"}} 
          className='amen-head'
          ><h6 className='small-the'>T H E</h6>
          A M E N I T I E S</h1>
        </div>
       
        <div className="amen-3">
          <h1 className='care'>C A R E F U L L Y
           </h1>
          <h1 className='care'>C O N S I D E R E D  & </h1>
          <h1 className='care'>M E T I C U L O  U S L Y </h1>
          <h1 className='care'>D E S I G N E D</h1>
          <p className='paragraph-bottom'>
            With uninterrupted views from each appartments, 'The Saruni' at
            Riverside Drive, is a modern interpretation of contemporary luxury
            specifically designed to enhance your living exparience
          </p>
        </div>
      </div>
      <div class="grid-child-element green">
        <img
                  src="http://www.thesaruni.com/TheSaruniImages/amenities.jpg" 

          // src="https://i.pinimg.com/564x/a8/c2/42/a8c24292df4428d84fdfe57b6637ef84.jpg"
          alt="residence"
          className="childimage"
        />
      </div>
    </div>
    </section>
    
    
    <section className="explore-section">
      <h1 className="explorer">
        <a href='/sunrise'><FaAngleDown/></a>
       </h1>
      
    </section>
  
  </div>
  )
}

export default Amenities