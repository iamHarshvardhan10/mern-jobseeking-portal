import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from '../redux/slice/authSlice.js'
import jobReducer from '../redux/slice/jobSlice.js'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
    version: 1
}


const rootReducer = combineReducers({
    auth: authReducer,
    jobs: jobReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store);