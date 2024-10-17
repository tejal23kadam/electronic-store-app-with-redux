import { combineReducers } from '@reduxjs/toolkit';
import AllDataReducer from './component/sliceComponent/AllDataSlice';



const rootReducer = combineReducers({
	allData: AllDataReducer	
})

export default rootReducer;