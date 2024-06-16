import { createSlice } from "@reduxjs/toolkit";

const appConfig = createSlice({
    name: "appConfigs",
    initialState: {
        lang : "en"
    },
    reducers : {
        changeAppLang : (state,action) => {
            state.lang = action.payload;
        }
    }
});

export default appConfig.reducer;

export const {changeAppLang} = appConfig.actions;