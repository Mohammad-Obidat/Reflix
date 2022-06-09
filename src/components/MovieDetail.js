import React, { Component } from 'react';

class MovieDetail extends Component {
  render() {
    const match = this.props.match;
    const movieId = match.params.movieId;

    const movie = this.props.movies.find((m) => {
      return m.id === parseInt(movieId);
    });

    return (
      <div id='movieContainer'>
        <h1>{movie.label}</h1>
        <img id='movieImg' src={movie.imgURL} alt='' />
        <p> {movie.description}</p>
      </div>
    );
  }
}

export default MovieDetail;
