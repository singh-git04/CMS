import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth/authslice"
import toggleTheme from "../shared/state/themeSlice"
export let store = configureStore({
    reducer:{
        auth: authReducer,
        theme: toggleTheme,
    },
});