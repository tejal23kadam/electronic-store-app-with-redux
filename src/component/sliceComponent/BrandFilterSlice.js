import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: "brandFilter",
    initialState:{        
        filterBrand: true      
      },  
    reducers: {
        addToFilter: (state, action) => {
            state.filterBrand = action.payload
        },
        deleteFromFilter: (state, action) => {
            const index = state.findIndex((cart) => cart.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
});
export const { addToFilter, deleteFromFilter } = FilterSlice.actions;
export default FilterSlice.reducer;