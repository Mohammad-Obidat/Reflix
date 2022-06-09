import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export class Navbar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              Reflix
            </IconButton>

            <Typography
              variant='h6'
              component='div'
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Button
                  variant='contained'
                  sx={{ mr: 2, backgroundColor: '#00b8d4' }}
                >
                  Home
                </Button>
              </Link>

              <Link to='/catalog' style={{ textDecoration: 'none' }}>
                <Button variant='contained' sx={{ backgroundColor: '#00b8d4' }}>
                  Catalog
                </Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Navbar;
