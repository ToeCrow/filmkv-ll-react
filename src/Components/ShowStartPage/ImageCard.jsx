// src/components/ImageCard.jsx
import React from 'react';

const ImageCard = ({ movie, index }) => {
  // Deconstruction of the movie object
  const { backdrop_path, title } = movie;

  return (
    <div className="image-container" id={`top${index}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} 
        alt={title} 
      />
      <div className="hover-text">
        För att få mer info om "{title}", klicka på bilden. 
      </div>
    </div>
  );
};

export default ImageCard;
