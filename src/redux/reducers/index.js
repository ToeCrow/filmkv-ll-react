// reducers/index.js (rootReducer)
import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer'; // Importera din reducer

const rootReducer = combineReducers({
  movies: moviesReducer, // Kombinera din reducer
});

export default rootReducer;
