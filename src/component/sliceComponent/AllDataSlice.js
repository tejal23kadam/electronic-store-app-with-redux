import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { fetchUsers } from '../sections/api';

export const fetchUsersAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
      const response = await fetchUsers();
      return response;
    }
  );
const AllDataSlice = createSlice({
    name: "allData",
    initialState:{
        users: [],
        loading: false,
        error: null
      },   
    extraReducers: (builder) => {
        builder
           .addCase(fetchUsersAsync.pending, (state) => {
             state.loading = true;
             state.error = null;
           })
           .addCase(fetchUsersAsync.fulfilled, (state, action) => {           
             state.loading = false;
             state.users = action.payload;
           })
          .addCase(fetchUsersAsync.rejected, (state, action) => {
             state.loading = false;
             state.error = action.error.message;
           });
        },
});
//export const {} = AllDataSlice.actions;
export default AllDataSlice.reducer;