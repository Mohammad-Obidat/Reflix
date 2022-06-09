import React, { Component } from 'react';

class Budget extends Component {
  constructor(props) {
    super(props);
    this.users = props.users;
    this.currentUser = props.currentUser;
  }

  findUser = () => {
    return this.users.find((u) => u.id === this.currentUser);
  };

  render() {
    let user = this.findUser();

    return (
      <h4 id='userBudget'>
        {user ? `${user.name} Budget: $${user.budget}` : 'No user selected'}
      </h4>
    );
  }
}

export default Budget;
