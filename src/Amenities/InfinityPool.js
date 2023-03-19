import { FaAngleDown } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import './Amenitieschild.css'

function  InfinityPool() {
    // let navigate = useNavigate();
  return ( 
    <div className="kubwaest">
    <div> 
      <ChildNav />{" "} 
    </div>
    <section className="section1">
    <div class="gridd-container-element">
      <div class="grid-child-element purn">
      <div className="the-residences">
          <img  
          src="http://www.thesaruni.com/TheSaruniImages/logogrey.png" 
          className="residence-home-logo-grey" alt="logo"/>
 
         <h6 className="gold-section one">T H E </h6>
            <h1 className="gold-section two"> A M E N I T I E S</h1>
          </div>
        {/* <div className="contenter1">
        
        <img 
          src="http://www.thesaruni.com/TheSaruniImages/logogrey.png" 

        // src="https://thesaruni.com/TheSaruniImages/sarunigrey.png"
         alt="logo" className="rolog"/>

          <h1 style={{marginTop:"90px"}} 
          className='amen-head'
          ><h6 className='small-the'>T H E</h6>
          A M E N I T I E S</h1>
        </div> */}
       
        <div className="amen-3">
        <div  className='ring'>
        <h1 className='carey'>CURATED FOR
           </h1>
          <h1 className='carey'>LEISURE, </h1>
          <h1 className='carey'>WELLNESS AND </h1>
          <h1 className='carey'>REJUVINATION</h1>
        </div>
        <p className='paragraph-infi'>
            The heated infinity swimming pool
          </p>
          <p className='paragraph-inf'>
           gym
          </p>
          <p className='paragraph-infin'>
            courtyard
          </p>
        </div>
      </div>
      <div class="grid-child-element green">
        <img
                  src="http://www.thesaruni.com/TheSaruniImages/infinitypool.jpg" 

          // src="https://i.pinimg.com/564x/a8/c2/42/a8c24292df4428d84fdfe57b6637ef84.jpg"
          alt="residence"
          className="childimage"
        />
      </div>
    </div>
    </section>
     
    
    <section className="explore-section">
      <h1 className="explorer">
        <a href='/gym'><FaAngleDown/></a>
       </h1>
      
    </section>
  
  </div>
    
  )
}

export default  InfinityPool