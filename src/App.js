
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
import FetchAllCategoryData from './component/sections/FetchAllCategoryData';
import ShoppingCartData from './component/sections/ShoppingCartData';
import NavBar from './component/sections/NavBar';
import AllFilterSection from './component/sections/DropDownFilterForEachSections';
import { useSelector,useDispatch } from 'react-redux';
import IndividualCategoryDetailPage from './component/sections/IndividualCategoryDetailPage';

function App() {

  const filterCategory = useSelector((state) => state.categoryFilter.filterCategory); 
  const dropDownSelectedItem = useSelector((state) => state.dropDownSelectedItemFilter.dropDownSelectedItem); 
  return (
    <div className="App container">
      <NavBar />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className='leftDiv'>
          <h4>Filters</h4>
          <AllFilterSection category={filterCategory} />
        </div>
        <div className='rightDiv'>
          {/* <Slider /> */}
          <Routes>
             
            <Route path='/' element={<FetchAllCategoryData />} />
            {/* <Route path="/audio" element={<AudioCategory />} /> 
            <Route path="/appliances" element={<AppliancesCategory />} />
            <Route path="/gaming" element={<GamingCategory />} />                    
            <Route path="/laptop" element={<LaptopCategory />} />
            <Route path="/mobile" element={<MobileCategory />} />
            <Route path="/tv" element={<TvCategory />} />    */}
            <Route path="/cartData" element={<ShoppingCartData />} />
          </Routes>
          
          <IndividualCategoryDetailPage category={filterCategory} brandFilter={dropDownSelectedItem} discountFilter={null} /> 
        </div>
      </div>

      <div className='indexPageFlex'>

      </div>
    </div>
  );
}
export default App;
