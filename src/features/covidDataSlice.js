import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  covidState: [],
  loading: true,
};

const CovidState = createSlice({
  name: "covid",
  initialState,
  reducers: {
    setCovidToInitialState: () => ({ ...initialState }),

    setAllStates: (state, action) => {
      state.covidState = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCovidToInitialState, setAllStates, setLoading } = CovidState.actions;

export default CovidState.reducer;