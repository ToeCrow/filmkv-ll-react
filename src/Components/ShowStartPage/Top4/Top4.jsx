// src/components/Top4.jsx
import React from 'react';
import ImageCard from '../ImageCard';

const Top4 = ({ movies }) => {
  return (
    <section id="top-4">
      <h2 id="top4-title">DE HETASTE FILMERNA JUST NU!</h2>
      <div className="image-container" id="top1">
        <ImageCard movie={movies[0]} index={1} /> 
      </div>
      <div id="top2-4">
        {movies.slice(1, 4).map((movie, index) => (
          <ImageCard key={movie.id} movie={movie} index={index + 2} /> 
        ))}
      </div>
    </section>
  );
};

export default Top4;
