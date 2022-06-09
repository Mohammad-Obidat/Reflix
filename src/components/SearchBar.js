import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

class SearchBar extends Component {
  searchNewMovies = (event) => {
    let movieName = event.target.value;
    this.props.searchForMovies(movieName);
  };

  render() {
    return (
      <Stack direction='row' spacing={1} sx={{ m: '10px' }}>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          name='label'
          options={this.props.movies}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Movies'
              placeholder='Search for movie'
              onChange={this.searchNewMovies}
            />
          )}
        />
        <Button variant='contained' endIcon={<SendIcon />}>
          Search
        </Button>
      </Stack>
    );
  }
}

export default SearchBar;
