import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CovidState from '../features/covidDataSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  covid: CovidState,
});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
});

export default store;