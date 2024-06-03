import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: null,
        movieTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null
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
        },
        
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },

        addTopRatedMovies: (state,action) => {
            state.topRatedMovies = action.payload;
        },

        addUpcominMovies: (state,action) => {
            state.upComingMovies = action.payload;
        }
    }
});



export default movies.reducer;
export const {addNowPlayingMovies, removeNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcominMovies} = movies.actions; 