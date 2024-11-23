import { createSlice } from "@reduxjs/toolkit";

const DropDownSelectedItemSlice = createSlice({
    name: "dropDownSelectedItemFilter",
    initialState:{        
        dropDownSelectedItem: ''     
      },  
    reducers: {
        addToDropDownSelectedItemFilter: (state, action) => {
            state.dropDownSelectedItem = action.payload
        },
        deleteFromDropDownSelectedItemFilter: (state, action) => {
            state.dropDownSelectedItem = null
        }
    }
});
export const { addToDropDownSelectedItemFilter, deleteFromDropDownSelectedItemFilter } = DropDownSelectedItemSlice.actions;
export default DropDownSelectedItemSlice.reducer;