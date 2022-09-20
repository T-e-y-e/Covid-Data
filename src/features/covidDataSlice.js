import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getData = createAsyncThunk("covidData/getData", async () => {
    return await fetch("https://covidnigeria.herokuapp.com/api").then((res) => {
        res.json()
    })
});

const covidDataSlice = createSlice(({
    name: "covidData",
    initialState: {
        covidData: [],
        loading: false,
    },
    extraReducers: {
        [getData.pending]: (state, action) => {
            state.loading = true;
        },
        [getData.fulfilled]: (state, action) => {
            state.loading = false;
            state.covidData = action.payload;
        },
        [getData.rejected]: (state, action) => {
            state.loading = false;
        },
    },
}));

export default covidDataSlice