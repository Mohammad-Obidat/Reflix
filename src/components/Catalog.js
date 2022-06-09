import React, { Component } from 'react';
import Budget from './Budget';
import Movies from './Movies';
import SearchBar from './SearchBar';

class Catalog extends Component {
  render() {
    let movies = this.props.movies;
    return (
      <>
        <SearchBar
          movies={movies}
          searchForMovies={this.props.searchForMovies}
        />
        <Budget users={this.props.users} currentUser={this.props.currentUser} />
        <hr />
        <div>
          <h1>Rented</h1>
          <Movies
            movies={movies.filter((m) => m.isRented)}
            toggleRentedMovies={this.props.toggleRentedMovies}
          />
        </div>
        <hr />
        <div>
          <h1>Catalog</h1>
          <Movies
            movies={movies}
            toggleRentedMovies={this.props.toggleRentedMovies}
          />
        </div>
      </>
    );
  }
}

export default Catalog;
