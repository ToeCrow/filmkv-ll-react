// actions/moviesActions.js
export const setMovies = (movies) => {
  return {
    type: 'SET_MOVIES',
    payload: movies,
  };
};
