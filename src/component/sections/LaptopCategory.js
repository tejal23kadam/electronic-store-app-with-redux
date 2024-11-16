import React from 'react';
import IndividualCategoryDetailPage from './IndividualCategoryDetailPage';
import AllFilterSection from './DropDownFilterForEachSections';
import { useDispatch } from 'react-redux';
import { deleteFromFilter } from '../sliceComponent/BrandFilterSlice';


function LaptopCategory() {
  const dispatch = useDispatch();
  dispatch(deleteFromFilter());
  return (
    <div>
      <AllFilterSection category="laptop"  />
      <IndividualCategoryDetailPage category="laptop" brand=""/>
    </div>
  );
}

export default LaptopCategory