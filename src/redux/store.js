import { configureStore } from "@reduxjs/toolkit";
import toggleMenuSlice from './features/toggleMenuSlice'

const store = configureStore({
    reducer:{
        menu: toggleMenuSlice,
    }
})

export default store;