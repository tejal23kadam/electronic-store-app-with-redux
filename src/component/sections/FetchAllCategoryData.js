import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDatasAsync } from '../sliceComponent/AllDataSlice';
import IndividualCategoryDetailPage from './IndividualCategoryDetailPage';

function FetchAllCategoryData() { 
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data whenever the current page changes
    dispatch(fetchDatasAsync());
  }, [dispatch]); 

  <IndividualCategoryDetailPage category='All' brandFilter="" discountFilter="" />
}

export default FetchAllCategoryData;
