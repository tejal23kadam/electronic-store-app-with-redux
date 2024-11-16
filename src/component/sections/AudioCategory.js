import React from 'react';
import IndividualCategoryDetailPage from './IndividualCategoryDetailPage';
import AllFilterSection from './DropDownFilterForEachSections';
import { useDispatch } from 'react-redux';
import { deleteFromFilter } from '../sliceComponent/BrandFilterSlice';

function AudioCategory() {
  const dispatch = useDispatch();
  dispatch(deleteFromFilter());
  return (
    <div>
      <AllFilterSection category="audio" />
      <IndividualCategoryDetailPage category="audio" />
    </div>
  );
}
export default AudioCategory