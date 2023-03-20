import './Amenitieschild.css'
// import { useNavigate } from "react-router-dom";
import ChildNav from '../Navbar/ChildNav';
import { FaAngleDown } from 'react-icons/fa';

  
function Amenities() {
    // let navigate = useNavigate();
  return (
    <div className="kubwaest">
    <div> 
      <ChildNav />{" "}
    </div>
    <section className="section1">
    <div class="gridd-container-element">
      <div class="grid-child-element purn">
      <div className="the-residences ties">
          <img  
          src="http://www.thesaruni.com/TheSaruniImages/logogrey.png" 
          className="residence-home-logo-grey" alt="logo"/>
 
         <h6 className="gold-section one">T H E </h6>
            <h1 className="gold-section two"> A M E N I T I E S</h1>
          </div>
      
       
        <div className="amen-3">
        <div  className='ring'>
        <h1 className='carey'>C A R E F U L L Y
           </h1>
          <h1 className='carey'>C O N S I D E R E D  & </h1>
          <h1 className='carey'>M E T I C U L O  U S L Y </h1>
          <h1 className='carey'>D E S I G N E D</h1>
        </div>
          
          <p className='paragraph-bottommer'>
            With uninterrupted views from each apartment, 'The Saruni' at
            Riverside Drive, is a modern interpretation of contemporary luxury
            specifically designed to enhance your living experience
          </p>
        </div>
      </div>
      
      <div class="grid-child-element green lobby">
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
        <a href='/amenitiesataglance' className='downarrow'><FaAngleDown/></a>
       </h1>
      
    </section>
  
  </div>
  )
}

export default Amenities