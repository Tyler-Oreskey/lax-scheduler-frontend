import React, { Component } from 'react';
import Form from './Form/Form';

import axios from '../../../axios';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await axios.users.post('/login', {
        email: this.state.email,
        password: this.state.password,
      });
    } catch (error) {
      // handle error here
    }
  };

  render() {
    return (
      <Form
        {...this.state}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Login;
