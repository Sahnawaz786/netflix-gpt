import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        videoTrailer:null,
        popularMovies:null,
        trendingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies = action.payload
        },
        addVideoTrailer:(state,action)=>{
            state.videoTrailer = action.payload
        }
    }
})

export const { addNowPlayingMovies , addVideoTrailer, addPopularMovies, addTrendingMovies} = movieSlice.actions

export default movieSlice.reducer