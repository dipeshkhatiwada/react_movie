import React from "react";

const MovieListing = () => {
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">renderMovies</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">renderShows</div>
      </div>
    </div>
  );
};

export default MovieListing;
