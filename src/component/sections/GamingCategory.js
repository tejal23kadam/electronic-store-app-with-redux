import React from 'react';
import IndividualCategoryDetailPage from './IndividualCategoryDetailPage';
import AllFilterSection from './DropDownFilterForEachSections';
import { useDispatch } from 'react-redux';
import { deleteFromFilter } from '../sliceComponent/BrandFilterSlice';

function GamingCategory() {
  const dispatch = useDispatch();
  dispatch(deleteFromFilter());
  return(
    <div>
       <AllFilterSection category="gaming"/>       
      <IndividualCategoryDetailPage category="gaming"/>
    </div>
  );
}

export default GamingCategory