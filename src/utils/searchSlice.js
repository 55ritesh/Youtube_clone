import { createSlice } from "@reduxjs/toolkit"

const searchSlice =createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResults :(state,action)=>{
            // when ever i think what i will send in my query
            // basically it will merge the payload and state
            // merging two object in java script
            // state = {...action.payload,...state};

            state = Object.assign(state,action.payload);
        },
    },
});

export const{cacheResults}=searchSlice.actions;
export default searchSlice.reducer;