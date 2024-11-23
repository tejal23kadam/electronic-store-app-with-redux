import { combineReducers } from '@reduxjs/toolkit';
import AllDataReducer from './component/sliceComponent/AllDataSlice';
import CartReducer from './component/sliceComponent/CartSlice';
import CategoryFilterReducer from './component/sliceComponent/CategoryFilterSlice';
import DropDownSelectedItemFilterReducer from './component/sliceComponent/DropDownSelectedItemSlice';

const rootReducer = combineReducers({
	allData: AllDataReducer	,
	cart:CartReducer,
	categoryFilter:CategoryFilterReducer,
	dropDownSelectedItemFilter:DropDownSelectedItemFilterReducer
})

export default rootReducer;