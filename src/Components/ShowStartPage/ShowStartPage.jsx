import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../../redux/actions/moviesActions'; 
import Top4 from './Top4/Top4';
import Top510 from './Top510/Top510';
import Socialmedia from './Socialmedia/Socialmedia';

const ShowStartPage = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const apiKey = '1d6c43749d5b136ddea6eee248fdc5e2';

  useEffect(() => {
    const getFilmsTop10 = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`
        );
        const data = await response.json();
        dispatch(setMovies(data.results.slice(0, 10)));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    getFilmsTop10();
  }, [dispatch]);

  if (!movies.length) {
    return <h2>Loading movies...</h2>;
  }

  return (
    <main id="main">
      <Top4 movies={movies.slice(0, 4)} />
      <Socialmedia />
      <Top510 movies={movies.slice(4, 10)} />
    </main>
  );
};

export default ShowStartPage;
