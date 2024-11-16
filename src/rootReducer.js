import { combineReducers } from '@reduxjs/toolkit';
import AllDataReducer from './component/sliceComponent/AllDataSlice';
import CartReducer from './component/sliceComponent/CartSlice';
import BrandFilterReducer from './component/sliceComponent/BrandFilterSlice';

const rootReducer = combineReducers({
	allData: AllDataReducer	,
	cart:CartReducer,
	brandFilter:BrandFilterReducer
})

export default rootReducer;