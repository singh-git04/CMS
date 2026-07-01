import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth/authslice"
export let store = configureStore({
    reducer:{
        auth: authReducer,
    },
});