import { combineReducers } from '@reduxjs/toolkit';
import TwoReducer from './slice/TwoSlice';
import FiveReducer from './slice/FiveSlice';
import SixReducer from './slice/SixSlice';


const rootReducer = combineReducers({
	two: TwoReducer,
	five: FiveReducer,
	six: SixReducer
})

export default rootReducer;