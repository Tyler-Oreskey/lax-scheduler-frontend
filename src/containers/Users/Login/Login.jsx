import React, { Component } from 'react';

import LoginForm from '../../../components/Users/LoginForm/LoginForm';
import axios from '../../../axios';

class Login extends Component {
  state = {
    formElements: {
      email: {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter email',
        autocomplete: 'email',
        value: '',
      },
      password: {
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Enter password',
        autocomplete: 'password',
        value: '',
      },
    },
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    const { formElements } = { ...this.state };
    formElements[name].value = value;
    this.setState({ formElements });
  };

  handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const body = {
        email: this.state.formElements.email.value,
        password: this.state.formElements.password.value,
      };

      await axios.users.post('/login', body);
    } catch (error) {
      // handle error here
    }
  };

  render() {
    return (
      <LoginForm
        formElements={this.state.formElements}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Login;
