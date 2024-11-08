
import './App.css';
import IndexPage from './component/IndexPage'
import { Route, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import TvCategory from './component/sections/TvCategory';
import AudioCategory from './component/sections/AudioCategory';
import LaptopCategory from './component/sections/LaptopCategory';
import MobileCategory from './component/sections/MobileCategory';
import GamingCategory from './component/sections/GamingCategory';
import AppliancesCategory from './component/sections/AppliancesCategory';
import AllCategory from './component/sections/AllCategory';
import ShoppingCartData from './component/sections/ShoppingCartData';

function App() {
  return (
    <div className="App">
      <IndexPage />
      <Routes>
        <Route path='/' element={<AllCategory />} />
        <Route path='/all' element={<AllCategory />} />
        <Route path="/tv" element={<TvCategory />} />
        <Route path="/audio" element={<AudioCategory />} />
        <Route path="/laptop" element={<LaptopCategory />} />
        <Route path="/mobile" element={<MobileCategory />} />
        <Route path="/gaming" element={<GamingCategory />} />
        <Route path="/appliances" element={<AppliancesCategory />} />
        <Route path="/cartData" element={<ShoppingCartData/>} />
      </Routes>
    </div>
  );
}
export default App;
