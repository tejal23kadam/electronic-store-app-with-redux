import React, { useState } from 'react';
import Slider from './sections/Slider';
import TvCategory from './sections/TvCategory';
import AudioCategory from './sections/AudioCategory';
import LaptopCategory from './sections/LaptopCategory';
import MobileCategory from './sections/MobileCategory';
import GamingCategory from './sections/GamingCategory';
import AppliancesCategory from './sections/AppliancesCategory';
import AllCategory from './sections/AllCategory';
import ShoppingCartData from './sections/ShoppingCartData';
import { Route, Routes } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { addToFilter } from './sliceComponent/BrandFilterSlice';

function Index() {
    const data = useSelector((state) => state.allData.data.products);
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);
    const dispatch = useDispatch();
   
   // const uniqueNumbers = data.map(item => item.brand).filter((value, index, self) => self.indexOf(value) === index);
    
 //console.log("uniqueNumbers"+JSON.stringify(uniqueNumbers));
    
    const toggleDropdown = () => setOpen(!isOpen);
   
    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        toggleDropdown();
       
    }


    {
    }
    return (
        <>
            <div >
                <ul>
                    <h3><u>Brands </u></h3>
                    <li>
                        <div className='dropdown'>
                            <div className='dropdown-header' onClick={toggleDropdown}>
                                {selectedItem ? data.find(item => item.id == selectedItem).brand : "Select your destination"}
                                <i className={`bi bi-chevron-right icon`}></i>
                            </div>
                            <div className={`dropdown-body ${isOpen && 'open'}`}>
                                {
                                    (data) ?
                                        (
                                            data.map((elm) => {
                                                return (
                                                    <div className="dropdown-item" onClick={e => {handleItemClick(e.target.id) ; dispatch(addToFilter(elm.brand))}} id={elm.id}>
                                                        <span className={`dropdown-item-dot ${elm.id == selectedItem && 'selected'}`}>• </span>
                                                        {elm.brand}
                                                    </div>
                                                );
                                            })

                                        ) :
                                        (
                                            <h4>Loading...</h4>
                                        )


                                }
                            </div>
                        </div>
                    </li>
                    <li>
                        <button type="button"  >Price</button>
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

        </>
    )
}
export default Index