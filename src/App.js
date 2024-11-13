
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
import NavBar from './component/sections/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='indexPageFlex'>        
          <IndexPage />    
      </div>
    </div>
  );
}
export default App;
