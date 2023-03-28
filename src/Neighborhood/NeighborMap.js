import { FaAngleUp } from 'react-icons/fa'
import ChildNav from '../Navbar/ChildNav'
import  './NeighMap.css'


function NeighborMap() {


  return (
    <div className="kubwa">
    <div>
      <ChildNav />{" "}
    </div>
    <div class="grid-container-elementr">
        <div class="grid-child-element puurple">
          <div className="map-1">
            <h2 className='gain'>GAIN CENTRAL</h2>
            

            <h2 className='gainn'> CONNECTIVITY</h2>

            <h2 className='gainn'>  TO RETAIL, </h2>

            <h2 className='gainn'> RECREATIONAL </h2>
            <h2 className='gainn'> ESSENTIAL SERVICES</h2>


          </div>
          <div className="prox">
          <h5 className='gain'>PROXIMITY TO MAJOR COMMERCIAL HUBS:</h5>
        <ul>
          <li className='place'>Westlands</li>
          <li className='place'>Lavington</li>
          <li className='place'>Kileleshwa</li>
          <li className='place'>Kilimani</li>
          <li className='place'>Yaya</li>
          <li className='place'>Nairobi CBD</li>
        </ul>
          </div>
          <div className="connect">
          <h5 className='gain'>BYPASS CONECTIVITY</h5>
        <p className='jkia'>20 min from JKIA via the Expressway</p>
        <p className='jkia'>Easy access to Ngong' Road, Kileleshwa, Kilimani and Loresho.</p>
          </div>
        </div>
        <div class="grid-child-element green">
          <img
          src='https://testdeploy.thesaruni.com/map.jpg'
            alt="residence"
            className="map"
            loading="lazy"

          /> 
        </div>
        
      </div>

      <section className="explore-section men">
      <h1 className="explorer">
        <a href='/menu' className="go-to-menu">GO TO MENU<FaAngleUp/></a>
       </h1>
      
    </section>
  </div>
  )
}

export default NeighborMap