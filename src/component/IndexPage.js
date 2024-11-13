import React from 'react'
import Slider from './sections/Slider';
import NavBar from './sections/NavBar';

import TvCategory from './sections/TvCategory';
import AudioCategory from './sections/AudioCategory';
import LaptopCategory from './sections/LaptopCategory';
import MobileCategory from './sections/MobileCategory';
import GamingCategory from './sections/GamingCategory';
import AppliancesCategory from './sections/AppliancesCategory';
import AllCategory from './sections/AllCategory';
import ShoppingCartData from './sections/ShoppingCartData';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Index() {
    const data = useSelector((state) => state.allData.data.products);
   // const propertyValues = data.map(obj => obj['brand']);
    //const uniqueValuesSet = new Set(propertyValues);
   // const distinctValues = Array.from(uniqueValuesSet);
 //   console.log(distinctValues);
    return (
        <>

            <div className='mainHeader'>
                <div style={{ backgroundColor: "yellow" }}>
                    <ul>
                        <h3><u>Brands </u></h3>
                        <li>
                            {data.map((elm, index) => {
                                return (
                                    <div key={index}>
                                        <label className="form-check-label">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                            // onChange={(e) => searchbyprice(elm)}
                                            // onChange={(e) => updateFilters(e.target.checked, elm)}
                                            />
                                            {elm.brand}
                                        </label>
                                    </div>
                                );
                            })}
                        </li>
                    </ul>
                </div>
                <div>
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
        </>
    )
}
export default Index