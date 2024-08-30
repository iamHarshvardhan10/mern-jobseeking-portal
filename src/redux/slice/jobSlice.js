import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allJobs: []
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.allJobs = action.payload;
        }
    }
})

export const { setJobs } = jobSlice.actions;
export default jobSlice.reducer;