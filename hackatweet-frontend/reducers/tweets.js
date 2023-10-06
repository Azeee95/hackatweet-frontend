
import { createSlice } from '@reduxjs/toolkit';  
	
const initialState = { 
    value:[]
};

export const tweetsSlice = createSlice( { 
name: 'tweets',
initialState,
reducers: { 
    addTweet: (state, action) => { state.value.push(action.payload) },
    deleteTweet:(state, action)=>{state.value= state.value.filter(e=>e.tweetuid !== action.payload.tweetuid)} 
 },
});
export const { addTweet, deleteTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;



// value: {
//     creator: null,
//     date:null,
//     hashtags:[],
//     likes:[],
//     message:null,
//     token : null,
//     tweetuid : null,
//     useruid : null,
//     },

// const tweet =      
// state.value.creator = action.payload.creator;
// state.value.date = action.payload.date;
// state.value.hashtags = action.payload.hashtags;
// state.value.likes = action.payload.likes;
// state.value.message = action.payload.message;
// state.value.token = action.payload.token;
// state.value.tweetuid = action.payload.tweetuid;
// state.value.useruid = action.payload.useruid;
