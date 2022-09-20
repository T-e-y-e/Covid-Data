import { configureStore } from '@reduxjs/toolkit';
import CovidDataSlice from '../features/covidDataSlice';

export const store = configureStore({
  reducer: {
    data: CovidDataSlice.reducer,
  },
});
