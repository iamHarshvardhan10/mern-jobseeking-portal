import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allJobs: [],
    singleJob: null
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            console.log('jobs' , action.payload)
            state.singleJob = action.payload
        }
    }
})

export const { setAllJobs , setSingleJob } = jobSlice.actions;
export default jobSlice.reducer;