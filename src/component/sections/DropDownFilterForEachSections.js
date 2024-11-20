import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFilter } from '../sliceComponent/BrandFilterSlice';
import IndividualCategoryDetailPage from './IndividualCategoryDetailPage';

const AllfilterSection = (props) => {
    const data = useSelector((state) => state.allData.data.products);
    const [isOpen, setOpen] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);
    const dispatch = useDispatch();
    let distinctValues;   

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (brand) => {
        selectedItem == brand ? setSelectedItem(null) : setSelectedItem(brand);
        toggleDropdown();
    }
    let filteredData = data.filter(data => data.category === props.category);
   
    //to get unique brand data from api 
    if (filteredData) {
        const propertyValues = filteredData.map(obj => obj['brand']);
        var newArray = propertyValues.map(function (x) { return x.toLowerCase() })
        const uniqueValuesSet = new Set(newArray);
        distinctValues = Array.from(uniqueValuesSet);
    }

    return (
        <>
            <div >
                <ul>
                    <li>
                        <div className='dropdown'>
                            <div className='dropdown-header' onClick={toggleDropdown}>
                                {selectedItem ? filteredData.find(item => item.id == selectedItem) : "Select Brands"}
                                {selectedItem}
                                <i className={`bi bi-chevron-right icon`}></i>
                            </div>
                            <div className={`dropdown-body ${isOpen && 'open'}`}>
                                {
                                    (data) ?
                                        (
                                            distinctValues.map((elm) => {
                                                return (
                                                    <div className="dropdown-item" onClick={e => { handleItemClick(elm); dispatch(addToFilter(elm)) }} id={elm.id}>
                                                        <span className={`dropdown-item-dot ${elm == selectedItem && 'selected'}`}>• </span>
                                                        {elm}
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
                <IndividualCategoryDetailPage category= {props.category} filter={selectedItem} />
            </div>
            
            <div>


            </div>

        </>
    )
}

export default AllfilterSection