import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"videos",
    initialState:{
        videos:[]
    },
    reducers:{
        setVideo:(state,action) =>{
            state.videos = action.payload
        }
    }
})

export const {setVideo} = videoSlice.actions
export default videoSlice.reducer