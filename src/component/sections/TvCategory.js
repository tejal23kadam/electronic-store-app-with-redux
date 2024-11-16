import React from 'react';
import IndividualCategoryDetailPage from './IndividualCategoryDetailPage';
import AllCategory from './AllCategory';
import AllFilterSection from './DropDownFilterForEachSections';
import { useDispatch } from 'react-redux';
import { deleteFromFilter } from '../sliceComponent/BrandFilterSlice';

function TvCategory() {
  const dispatch = useDispatch();
  dispatch(deleteFromFilter());
  return (    
    <div>
      <AllFilterSection category="tv" />
      <IndividualCategoryDetailPage category="tv" />
    </div>
  );
}

export default TvCategory