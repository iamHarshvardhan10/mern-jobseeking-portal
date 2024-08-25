import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        signInStart: (state, action) => {
            state.loading = action.payload;
            state.error = action.payload;
        },
        signSuccess: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        signFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { signInStart, signSuccess, signFail } = authSlice.actions;
export default authSlice.reducer;