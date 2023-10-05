
import { createSlice } from '@reduxjs/toolkit';  
	
const initialState = { 
    value: { token: null, email: null },
};

export const userSlice = createSlice( { 
name: 'user',
initialState,
reducers: { 
    login: (state, action) => {       
        state.value.email = action.payload.email;
        state.value.token = action.payload.token;
     },
    logout:(state)=>{state.value= initialState} 
 },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
