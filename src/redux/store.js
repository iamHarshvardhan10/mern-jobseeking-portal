import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/slice/authSlice.js'
import jobReducer from '../redux/slice/jobSlice.js'
const store = configureStore({
    reducer: {
        auth: authReducer,
        job: jobReducer
    }
})

export default store;