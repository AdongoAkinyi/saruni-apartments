import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Amen from "./Amenities/Amen";
import Amenities from "./Amenities/Amenities";
import AmenitiesHome from "./Amenities/AmenitiesHome";
import Courtyard from "./Amenities/Courtyard";
import Gym from "./Amenities/Gym";
import InfinityPool from "./Amenities/InfinityPool";
import Sunrise from "./Amenities/Sunrise";
import Sunset from "./Amenities/Sunset";
import Availability from "./Availability/Availability";
import Home from "./Home/Home";
import Full from "./Navbar/Full";
import Neighborhood from "./Neighborhood/Neighborhood";
import NeighborhoodHome from "./Neighborhood/NeighborhoodHome";
import NeighborMap from "./Neighborhood/NeighborMap";
import Bedroom from "./Residence/Bedroom";
import Kitchen from "./Residence/Kitchen";
import Living from "./Residence/Living";
import Residence from "./Residence/Residence";
import ResidenceHome from "./Residence/ResidenceHome";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
         <Route path="/residencehomepage" element={<ResidenceHome />} />
        <Route path="/amenitieshomepage" element={<AmenitiesHome />} />
        <Route
          path="/neighborhoodhomepage"
          element={<NeighborhoodHome />} 
        />
        {/* RESIDENCE ROURES */}
         <Route path="/residence" element={<Residence />} />
       <Route path="/livingroom" element={<Living />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/kitchen" element={<Kitchen />} />

        {/* AMENITIES ROUTES */}
        <Route path="/amen" element={<Amen />} />

         <Route path="/amenities" element={<Amenities />} />
        <Route path="/sunrise" element={<Sunrise />} />
       <Route path="/sunset" element={<Sunset />} />
        <Route path='/amenitiesinfinity'  element={<InfinityPool />}/>
         <Route path='/courtyard'  element={<Courtyard/>}/>
        <Route path='/gym'  element={<Gym/>}/>
        <Route path='/availability'  element={<Availability/>}/>


        {/* NEIGHBORHOOD ROUTES */}
        <Route path='/neighborhood'  element={<Neighborhood/>}/>
        <Route path='/map'  element={<NeighborMap/>}/>

        <Route path='/menu'  element={<Full/>}/>

      </Routes>
    </Router>
  );
}

export default App;
