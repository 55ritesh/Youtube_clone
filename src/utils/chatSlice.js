import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./contants";


const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages: []
    },
    reducers:{
        addMessage: (state,action)=>{
            // state.messages.push(action.payload)

            // when we are doing splice it will restrict my length to be what given(10) and it will remove one message fromt the top whenever adding one message from top
            state.messages.splice(LIVE_CHAT_COUNT,1);
            // state.messages.unshift(action.payload);
            state.messages.push(action.payload)
        },
    },
}
);



export const{addMessage} = chatSlice.actions;
export default chatSlice.reducer

