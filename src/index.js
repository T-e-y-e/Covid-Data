import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/lib/persistStore';

const container = document.getElementById('root');
const root = createRoot(container);
const persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

