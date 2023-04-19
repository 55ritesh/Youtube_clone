import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"App",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        // action
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        }
    },
})

export const {toggleMenu,closeMenu} = appSlice.actions;
export default appSlice.reducer;