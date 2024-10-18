import { combineReducers } from '@reduxjs/toolkit';
import AllDataReducer from './component/sliceComponent/AllDataSlice';
import CartReducer from './component/sliceComponent/CartSlice';

const rootReducer = combineReducers({
	allData: AllDataReducer	,
	cart:CartReducer
})

export default rootReducer;