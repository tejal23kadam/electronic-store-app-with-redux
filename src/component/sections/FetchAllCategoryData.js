import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDatasAsync } from '../sliceComponent/AllDataSlice';

function FetchAllCategoryData() { 
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data whenever the current page changes
    dispatch(fetchDatasAsync());
  }, [dispatch]); 
}

export default FetchAllCategoryData;
