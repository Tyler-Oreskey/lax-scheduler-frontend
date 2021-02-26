import React, { Component } from 'react';
import Form from './Form/Form';

import axios from '../../../axios';

class Signup extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmedPassword: '',
    receive_emails: false,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleChecked = (e) => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  };

  handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await axios.users.post(null, {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        receive_emails: this.state.receive_emails,
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
        handleChecked={this.handleChecked}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Signup;
