import React from 'react';
import IndividualCategoryDetailPage from './IndividualCategoryDetailPage';
import AllFilterSection from './DropDownFilterForEachSections';
import { useDispatch } from 'react-redux';
import { deleteFromFilter } from '../sliceComponent/BrandFilterSlice';


 function AppliancesCategory() {
  const dispatch = useDispatch();
  dispatch(deleteFromFilter());
  return(
    <div>
      <AllFilterSection category="appliances"/>
      <IndividualCategoryDetailPage category="appliances"/>
    </div>
  );
 }
  export default AppliancesCategory