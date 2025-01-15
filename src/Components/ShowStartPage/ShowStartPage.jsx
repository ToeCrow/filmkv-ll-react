import React, { useEffect, useState } from 'react';  // Lägg till useState för lokal state
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../../redux/actions/moviesActions'; 
import Top4 from './Top4/Top4';
import Top510 from './Top510/Top510';
import Socialmedia from './Socialmedia/Socialmedia';
import apiKey from '../../../config';

const ShowStartPage = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);  // Lägg till loading state

  useEffect(() => {
    if (!movies.length && !loading) { // Kolla om det redan finns filmer och om vi inte är i en loading-state
      setLoading(true);  // Sätt loading till true för att signalera att data hämtas
      const getFilmsTop10 = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`
          );
          const data = await response.json();
          dispatch(setMovies(data.results.slice(0, 10)));
          setLoading(false);  // Sätt loading till false när data är hämtad
        } catch (error) {
          console.error('Error fetching movies:', error);
          setLoading(false);  // Sätt loading till false även om det sker ett fel
        }
      };

      getFilmsTop10();
    }
  }, [dispatch, movies.length, loading]);  // Lägg till loading i beroende-arrayen

  if (loading || !movies.length) {
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
