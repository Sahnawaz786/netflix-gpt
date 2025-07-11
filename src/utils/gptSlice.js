import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        toggleGptSearchBtn :false
    },
    reducers:{
        toogleGptBtn: (state)=>{
            state.toggleGptSearchBtn = !state.toggleGptSearchBtn
        }
    }
})

export const { toogleGptBtn} = gptSlice.actions

export default gptSlice.reducer