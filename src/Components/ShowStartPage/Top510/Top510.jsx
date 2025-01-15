// src/components/Top510.jsx
import React from 'react';
import ImageCard from '../ImageCard';

const Top510 = ({ movies }) => {
  return (
    <section id="top5-10">
      <div id="top5-7">
        {movies.slice(0, 3).map((movie, index) => (
          <ImageCard key={movie.id} movie={movie} index={index + 5} /> // Top 5 till 7
        ))}
      </div>
      <div id="top8-10">
        {movies.slice(3, 6).map((movie, index) => (
          <ImageCard key={movie.id} movie={movie} index={index + 8} /> // Top 8 till 10
        ))}
      </div>
    </section>
  );
};

export default Top510;
