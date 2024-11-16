import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFilter } from '../sliceComponent/BrandFilterSlice';

const AllfilterSection = (props) => {
    const data = useSelector((state) => state.allData.data.products);
    const [isOpen, setOpen] = useState(false);
   
    const [selectedItem, setSelectedItem] = useState(null);
    const dispatch = useDispatch();

    //to get unique brand data from api 
    if (data) {
       
        const propertyValues =data.map(obj => obj['brand']);
        var newArray = propertyValues.map(function (x) { return x.toLowerCase() })
        const uniqueValuesSet = new Set(newArray);
        const distinctValues = Array.from(uniqueValuesSet);
        console.log("new filter data "+distinctValues);      
    }

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        toggleDropdown();

    }

    let filteredData = data.filter(data => data.category === props.category);
    return (
        <>
            <div >
                <ul>
                    <li>
                        <div className='dropdown'>
                            <div className='dropdown-header' onClick={toggleDropdown}>
                                {selectedItem ? filteredData.find(item => item.id == selectedItem).brand : "Select Brands"}
                                <i className={`bi bi-chevron-right icon`}></i>
                            </div>
                            <div className={`dropdown-body ${isOpen && 'open'}`}>
                                {
                                    (data) ?
                                        (
                                            filteredData.map((elm) => {
                                                return (
                                                    <div className="dropdown-item" onClick={e => { handleItemClick(e.target.id); dispatch(addToFilter(elm.brand)) }} id={elm.id}>
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


            </div>

        </>
    )
}

export default AllfilterSection