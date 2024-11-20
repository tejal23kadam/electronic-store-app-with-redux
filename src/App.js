
import './App.css';

import { Route, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import Slider from './component/sections/Slider';
import TvCategory from './component/sections/TvCategory';
import AudioCategory from './component/sections/AudioCategory';
import LaptopCategory from './component/sections/LaptopCategory';
import MobileCategory from './component/sections/MobileCategory';
import GamingCategory from './component/sections/GamingCategory';
import AppliancesCategory from './component/sections/AppliancesCategory';
import AllCategory from './component/sections/AllCategory';
import ShoppingCartData from './component/sections/ShoppingCartData';
import NavBar from './component/sections/NavBar';
import AllFilterSection from './component/sections/DropDownFilterForEachSections';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='indexPageFlex'>      
        <Slider />
        <Routes>
          <Route path='/' element={<AllCategory />} />
          <Route path='/all' element={<AllCategory />} />
          <Route path="/tv" element={<TvCategory />} />
          <Route path="/audio" element={<AudioCategory />} />
          <Route path="/laptop" element={<LaptopCategory />} />
          <Route path="/mobile" element={<MobileCategory />} />
          <Route path="/gaming" element={<GamingCategory />} />
          <Route path="/appliances" element={<AppliancesCategory />} />
          <Route path="/cartData" element={<ShoppingCartData />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
