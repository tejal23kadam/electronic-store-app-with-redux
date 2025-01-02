import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDatasAsync } from '../sliceComponent/AllDataSlice';
import IndividualCategoryDetailPage from './IndividualCategoryDetailPage';

function FetchAllCategoryData() { 
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data whenever the component mounts
    dispatch(fetchDatasAsync());
  }, [dispatch]);  // Only dispatch once on mount

  // Returning the component for rendering
  return (
    <IndividualCategoryDetailPage category='all' brandFilter="" discountFilter="" />
  );
}

export default FetchAllCategoryData;