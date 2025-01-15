// src/components/ImageCard.jsx
import React from 'react';

const ImageCard = ({ movie, index }) => {
  return (
    <div className="image-container" id={`top${index}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="hover-text">
        För att få mer info om "{movie.title}", klicka på bilden.
      </div>
    </div>
  );
};

export default ImageCard;
