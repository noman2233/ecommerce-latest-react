import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },

  reducers: {
    loginStart:(state,action)=>{
        state.isFetching=true;
        state.error=false;
    },
    loginSuccess:(state,action)=>{
        state.isFetching=true;
        state.error=false;
        state.currentUser=action.payload;
        
    },
    loginFailure:(state)=>{
        state.isFetching=false;
        state.error=true;
        
    }
   
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer;
