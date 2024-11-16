import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: "brandFilter",
    initialState:{        
        filterBrand: ''     
      },  
    reducers: {
        addToFilter: (state, action) => {
            state.filterBrand = action.payload
        },
        deleteFromFilter: (state, action) => {
            state.filterBrand = null
        }
    }
});
export const { addToFilter, deleteFromFilter } = FilterSlice.actions;
export default FilterSlice.reducer;