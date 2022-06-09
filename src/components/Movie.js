import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

class Movie extends Component {
  isRented = () => {
    let id = this.props.id;
    this.props.toggleRentedMovies(id);
  };

  render() {
    return (
      <Card sx={{ maxWidth: 345, m: '15px' }}>
        <CardMedia
          component='img'
          height='140'
          image={this.props.image}
          alt='card image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {this.props.label}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {this.props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={this.isRented}>
            {this.props.isRented ? (
              <Fab size='small' color='primary' aria-label='delete'>
                <DeleteIcon />
              </Fab>
            ) : (
              <Fab size='small' color='primary' aria-label='add'>
                <AddIcon />
              </Fab>
            )}
          </Button>
          <Link to={`/catalog/movies/${this.props.id}`}>
            <Button size='small'>View Movie</Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default Movie;
