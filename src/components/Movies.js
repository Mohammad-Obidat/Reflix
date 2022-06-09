import { Grid } from '@mui/material';
import React, { Component } from 'react';
import Movie from './Movie';

export class Movies extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        {this.props.movies.map((m) => {
          return (
            <Grid key={m.id} item>
              <Movie
                id={m.id}
                label={m.label}
                image={m.imgURL}
                description={m.description}
                isRented={m.isRented}
                toggleRentedMovies={this.props.toggleRentedMovies}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default Movies;
