import { configureStore } from "@reduxjs/toolkit";
import toggleMenuSlice from './features/toggleMenuSlice'
import videoReducer from './features/videoSlice'

const store = configureStore({
    reducer:{
        menu: toggleMenuSlice,
        videos: videoReducer,
    }
})

export default store;