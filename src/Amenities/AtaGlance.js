import './Ataglance.css'
import ChildNav from '../Navbar/ChildNav';
import { FaAngleDown } from 'react-icons/fa';

function AtaGlance() {
  return (
    <div className="kubwa">
      <div>
         <ChildNav />{" "}
      </div>
      <div className="section1">
        <div class="grid-ccontainer-element">
          <div class="grid-child-element purple">
             <div className="glance1">
              <h4 className='topper r'>A M  E N I T I E S   <a className='toper'>  A T</a> </h4>
              <h4 className='topper'><a className='toper'>A      </a> G L  A N C E</h4>
            </div>
  

            <div className="glance two">
              <div className="logosection">
              <img  
          src="http://www.thesaruni.com/TheSaruniImages/logogrey.png" 
          className="residence-home-logo-greyy" alt="logo"/>
 
                 <h1 className='amenn'>LEISURE</h1>
              </div>
              <div className="list-amenities">
              
                <ul>
                  <li>Reception lobby and management office</li>
                  <li>2 High speed lifts</li>
                  <li>
                    24Hr Security services at the gate and on property intercom
                  </li>
                  <li>Ample Parking</li>
                  <li>Full backup generator</li>
                  <li>24 Hr CCTV</li>
                  <li>Perimeter electric fence</li>
                  <li>Borehole</li>
                </ul>
              </div>
            </div>
            
            <div className="glance three">
              <div className="logosection">
              <img  
          src="http://www.thesaruni.com/TheSaruniImages/logogrey.png" 
          className="residence-home-logo-greyy" alt="logo"/>
 
                <h1 className='amenn'>WELLNESS</h1>
              </div>
              <div className="list-amenities">
                <ul>
                  <li>Modern fitted gym</li>
                  <li>Sauna</li>
                  <li>Steam Room</li>
                </ul>
              </div>
            </div>


            <div className="glance four" >
              <div className="logosection">
              <img  
          src="http://www.thesaruni.com/TheSaruniImages/logogrey.png" 
          className="residence-home-logo-greyy" alt="logo"/>
 
                <h1  className='amenn'>REJUVENATION</h1>
              </div>
              <div className="list-amenities">
                <ul>
                  <li>East and West Skygardens</li>
                  <li>Infinity Heated poool</li>
                  <li>Ground level manicured and landscaped coutyard garden</li>
                </ul>
              </div>
            </div>
          </div>

          
          <div class="grid-child-element green">
            <img
                      src="http://www.thesaruni.com/TheSaruniImages/avilability.jpg"

              // src="https://i.pinimg.com/564x/a8/c2/42/a8c24292df4428d84fdfe57b6637ef84.jpg"
              alt="residence"
              className="childimage"
            />
          </div>
        </div>
      </div>
      <section className="explore-section">
      <h1 className="explorer">
        <a href='/neighborhood'><FaAngleDown/></a>
       </h1>
      
    </section>
    </div>
  );
}

export default AtaGlance;
