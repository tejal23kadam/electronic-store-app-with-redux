import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
      addToCart: (state, action) => {      
        state.push(action.payload);       
      },    
      updateToCart: (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        const updatedState = [...state];
        updatedState[index].text = action.payload.text;
      },
     
      deleteFromCart: (state, action) => {
        const index = state.findIndex((cart) => cart.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
      deleteAllCart: (state, action) => {
        state.splice(0); //if you don't specify the end point of an array it will delete all the array starting from the given position.
      },
    },
  });
export const {addToCart, updateToCart, deleteFromCart, deleteAllCart} = CartSlice.actions;
export default CartSlice.reducer;