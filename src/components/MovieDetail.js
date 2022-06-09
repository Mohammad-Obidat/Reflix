import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

class MovieDetail extends Component {
  render() {
    const match = this.props.match;
    const movieId = match.params.movieId;

    const movie = this.props.movies.find((m) => {
      return m.id === parseInt(movieId);
    });

    return (
      <Grid container direction='column' alignItems='center' justify='center'>
        <Grid item>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={`https://image.tmdb.org/t/p/original/${movie.imgURL}`}
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                  {movie.label}
                </Typography>
                <Typography variant='body3' color='text.secondary'>
                  {movie.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default MovieDetail;
