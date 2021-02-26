import React, { Component } from 'react';
import Form from './Form/Form';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmedPassword: '',
    receiveEmailUpdates: false,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleChecked = (e) => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
