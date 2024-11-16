import React from 'react';
import IndividualCategoryDetailPage from './IndividualCategoryDetailPage';
import AllFilterSection from './DropDownFilterForEachSections';
import { useDispatch } from 'react-redux';
import { deleteFromFilter } from '../sliceComponent/BrandFilterSlice';

function MobileCategory() {
  const dispatch = useDispatch();
  dispatch(deleteFromFilter());
  return (
    <div>
      <AllFilterSection category="mobile" />
      <IndividualCategoryDetailPage category="mobile" />
    </div>
  );
}
export default MobileCategory