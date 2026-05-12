import { createSlice } from "@reduxjs/toolkit";

const toggleMenuSlice = createSlice({
    name:'menu',
    initialState:{
        isMenuOpen: true
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state)=>{
            state.isMenuOpen = false
        },
        openMenu: (state)=>{
            state.isMenuOpen = true
        }
    }
})

export const {toggleMenu, closeMenu, openMenu} = toggleMenuSlice.actions
export default toggleMenuSlice.reducer