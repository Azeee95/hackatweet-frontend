
import { createSlice } from '@reduxjs/toolkit';  
	
const initialState = { 
    value: { token: null, email: null, useruid: null, firstname: null },
};

export const userSlice = createSlice( { 
name: 'user',
initialState,
reducers: { 
    login: (state, action) => {       
        state.value.email = action.payload.email;
        state.value.token = action.payload.token;
        state.value.useruid = action.payload.useruid
        state.value.firstname = action.payload.firstname
     },
    logout:(state)=>{state.value= initialState} 
 },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
