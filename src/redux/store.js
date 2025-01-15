// redux/store.js
import { configureStore } from '@reduxjs/toolkit';  // Redux Toolkit för enkel konfiguration
import rootReducer from './reducers';  // Importera rootReducer

const store = configureStore({
  reducer: rootReducer,  // Använd rootReducer här
  devTools: process.env.NODE_ENV !== 'production',  // Aktivera Redux DevTools i utvecklingsläge
});

export default store;  // Exportera store
