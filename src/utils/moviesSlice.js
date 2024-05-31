import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: null,
        movieTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlaying = action.payload;
        },

        removeNowPlayingMovies: (state) => {
            state.nowPlaying = null;
        },

        addMovieTrailer: (state,action) => {
            state.movieTrailer = action.payload;
        } 
    }
});



export default movies.reducer;
export const {addNowPlayingMovies, removeNowPlayingMovies, addMovieTrailer} = movies.actions; 