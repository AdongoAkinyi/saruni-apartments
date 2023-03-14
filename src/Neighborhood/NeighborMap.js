import Navbar from '../Navbar/Navbar'
import  './NeighMap.css'


function NeighborMap() {


  return (
    <div className="kubwa">
    <div>
      <Navbar />{" "}
    </div>
    <div class="grid-container-element">
        <div class="grid-child-element purple">
          <div className="map-1">
            <h1>GAIN CENTRAL CONNECTIVITY TO RETAIL, RECREATIONAL & ESSENTIAL SERVICES</h1>
          </div>
          <div className="prox">
          <h6>PROXIMITY TO MAJOR COMMERCIAL HUBS:</h6>
        <ul>
          <li>Westlands</li>
          <li>Lavington</li>
          <li>Kileleshwa</li>
          <li>Kilimani</li>
          <li>Yaya</li>
          <li>Nairobi CBD</li>
        </ul>
          </div>
          <div className="connect">
          <h6>BYPASS CONECTIVITY</h6>
        <p>20 min from JKIA via the Expressway</p>
        <p>Easy access to Ngong' Road, Kileleshwa, Kilimani and Loresho.</p>
          </div>
        </div>
        <div class="grid-child-element green">
          <img
            src="https://i.pinimg.com/564x/a8/c2/42/a8c24292df4428d84fdfe57b6637ef84.jpg"
            alt="residence"
            className="childimage"
          />
        </div>
      </div>
  </div>
  )
}

export default NeighborMap