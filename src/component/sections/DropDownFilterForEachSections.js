import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFilter } from '../sliceComponent/BrandFilterSlice';
import IndividualCategoryDetailPage from './IndividualCategoryDetailPage';

const AllfilterSection = (props) => {
    const data = useSelector((state) => state.allData.data.products);
    const [isOpen, setOpen] = useState(false);

    const [brandSelectedItem, setBrandSelectedItem] = useState(null);
    const [discountSelectedItem, setDiscountSelectedItem] = useState(null);
    const dispatch = useDispatch();
    let brandDistinctValues, discountDistinctValues;

    const toggleDropdown = () => setOpen(!isOpen);

    const handleBrandItemClick = (brand) => {
        setBrandSelectedItem(brand);
        toggleDropdown();
    }

    const handleDiscountItemClick = (discount) => {
        setDiscountSelectedItem(discount);
        toggleDropdown();
    }


    let filteredData = data.filter(data => data.category === props.category);

    //to get unique brand data from api 
    if (filteredData) {
        const propertyValues = filteredData.map(obj => obj['brand']);
        var newArray = propertyValues.map(function (x) { return x.toLowerCase() })
        const uniqueValuesSet = new Set(newArray);
        brandDistinctValues = Array.from(uniqueValuesSet);
    }
    //to get unique Discount from api 
    if (filteredData) {
        const propertyValues = filteredData.map(obj => obj['discount']);
        const uniqueValuesSet = new Set(propertyValues);
        discountDistinctValues = Array.from(uniqueValuesSet);
        console.log("discunt uniqueue values are " + discountDistinctValues);
    }

    function noData() {

    }

    return (
        <>
            <div >
                <button onClick={() => {setBrandSelectedItem(null); setOpen(false);}}>clear</button>
                <ul>
                    <li>
                        <div className='dropdown'>
                            <div className='dropdown-header' onClick={toggleDropdown}>
                                {brandSelectedItem ? filteredData.find(item => item.id == brandSelectedItem) : "Select Brands"}
                                {brandSelectedItem}
                                <i className={`bi bi-chevron-right icon`}></i>
                            </div>
                            <div className={`dropdown-body ${isOpen && 'open'}`}>
                                {
                                    (data) ?
                                        (
                                            brandDistinctValues.map((elm) => {
                                                return (
                                                    <div className="dropdown-item" onClick={e => { handleBrandItemClick(elm); dispatch(addToFilter(elm)) }} id={elm.id}>
                                                        <span className={`dropdown-item-dot ${elm == brandSelectedItem && 'selected'}`}>• </span>
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
                        <button onClick={() =>{setDiscountSelectedItem(null); setOpen(false);}} >clear</button>
                        <div className='dropdown'>
                            <div className='dropdown-header' onClick={toggleDropdown}>
                                {discountSelectedItem ? filteredData.find(item => item.id == discountSelectedItem): "Select Discount"}
                                {discountSelectedItem} %off
                                <i className={`bi bi-chevron-right icon`}></i>
                            </div>
                            <div className={`dropdown-body ${isOpen && 'open'}`}>
                                {
                                    (data) ?
                                        //(discountDistinctValues.filter(item => item !== null)
                                        discountDistinctValues.filter(elm => elm != null).map(elm => {
                                            return (
                                                <div className="dropdown-item" onClick={e => { handleDiscountItemClick(elm); dispatch(addToFilter(elm)) }} id={1}>
                                                    <span className={`dropdown-item-dot ${elm == discountSelectedItem && 'selected'}`}>• </span>
                                                    {elm} %off
                                                </div>
                                                // <h1>data</h1>
                                            );
                                        })

                                        :
                                        (
                                            <h4>Loading...</h4>
                                        )
                                }
                            </div>
                        </div>
                    </li>
                </ul>
                <IndividualCategoryDetailPage category={props.category} brandFilter={brandSelectedItem} discountFilter={discountSelectedItem} />
            </div>

            <div>


            </div>

        </>
    )
}

export default AllfilterSection