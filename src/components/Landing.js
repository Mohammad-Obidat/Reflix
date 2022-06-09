import React, { Component } from 'react';
import User from './User';
import { Grid } from '@mui/material';

class Landing extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        {this.props.users.map((u) => {
          return (
            <Grid key={u.id} item>
              <User
                id={u.id}
                name={u.name}
                url={u.url}
                currentUser={this.props.currentUser}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default Landing;
