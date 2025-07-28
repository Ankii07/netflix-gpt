import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        popularMovies: null,
        nowPlayingMovies: null,
        trailerVideo: null,
        trendingMovies: null,
        UpcomingMovies: null,
    },  
    reducers:{

        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;    
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;    
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;    
        },
        addUpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload;    
        }
    }

});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTrendingMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;