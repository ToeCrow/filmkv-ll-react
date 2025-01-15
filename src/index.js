// src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';  // Router för hela appen
import { Provider } from 'react-redux';  // Redux Provider
import store from './redux/store';  // Importera Redux store

// Här renderar vi vår app i DOMen och placerar den i root elementet.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Redux Provider för att koppla Redux till hela appen */}
      <BrowserRouter>  {/* React Router för att hantera routing */}
        <App />  {/* Din app-komponent */}
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
