import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesSliceReducer from "./moviesSlice";
import appConfigReducer from "./appConfigSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesSliceReducer,
        appConfig : appConfigReducer
    },
});

export default appStore;