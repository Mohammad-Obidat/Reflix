import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import Landing from './components/Landing';
import MovieDetail from './components/MovieDetail';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          id: 1,
          name: 'John Doe',
          budget: 100,
          url: 'https://img.freepik.com/free-photo/3d-cartoon-character-fun-teenager_183364-80870.jpg?t=st=1654607775~exp=1654608375~hmac=3b8f3b64514a12a7517bcc24be619a04902dc90314b0dc5c938f9e64d27ae3ad&w=740',
        },
        {
          id: 2,
          name: 'Alexa',
          budget: 1000,
          url: 'https://img.freepik.com/free-photo/fun-3d-cartoon-casual-character-woman_183364-80070.jpg?t=st=1654607775~exp=1654608375~hmac=b66402ce471aa9c66f819d8db8e657189986397ec5c7c28e1cb01096a1a7ce7c&w=740',
        },
      ],
      movies: [
        {
          id: 1,
          label: 'Pirates Of Caribbean',
          description: `Pirates of the Caribbean is a sweeping action-adventure story set in an era when villainous pirates scavenged the Caribbean seas.`,
          imgURL:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuXg9-SKv56luTkJykDg63FkHrC_ezykQ4w&usqp=CAU',
          isRented: false,
        },
        {
          id: 2,
          label: 'Game Of Thrones',
          description: `Game of Thrones is an HBO series that tells the story of a medieval country's civil war.`,
          imgURL:
            'https://upload.wikimedia.org/wikipedia/he/d/dc/Game_of_Thrones_2011_Intertitle.png',
          isRented: false,
        },
      ],
      filteredMovies: [],
      isSearch: false,
      currentUser: 0,
    };
  }

  currentUser = (userId) => {
    let currentUser = this.state.currentUser;
    currentUser = userId;

    this.setState({ currentUser });
  };

  toggleRentedMovies = (movieId) => {
    let movies = [...this.state.movies];

    movies.forEach((m) => {
      if (m.id === movieId) {
        m.isRented = !m.isRented;
      }
    });

    this.setState({ movies });
  };

  searchForMovies = (movieName) => {
    let movies = this.state.movies;
    let filteredMovies = this.state.filteredMovies;

    if (movieName === '') this.setState({ isSearch: false });

    filteredMovies = movies.filter((m) => m.label.includes(movieName));

    this.setState({ filteredMovies, isSearch: true });
  };

  render() {
    return (
      <Router>
        <>
          <Navbar currentUser={this.currentUser} />

          <div style={{ margin: '20px' }}>
            <Route
              exact
              path='/'
              render={() => (
                <Landing
                  users={this.state.users}
                  currentUser={this.currentUser}
                />
              )}
            />

            <Route
              exact
              path='/catalog'
              render={() => (
                <Catalog
                  searchForMovies={this.searchForMovies}
                  toggleRentedMovies={this.toggleRentedMovies}
                  currentUser={this.state.currentUser}
                  users={this.state.users}
                  movies={
                    this.state.isSearch
                      ? this.state.filteredMovies
                      : this.state.movies
                  }
                />
              )}
            />

            <Route
              exact
              path='/catalog/movies/:movieId'
              render={({ match }) => (
                <MovieDetail match={match} movies={this.state.movies} />
              )}
            />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
