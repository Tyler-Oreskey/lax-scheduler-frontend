import React, { Component } from 'react';

import LoginForm from '../../../components/Users/LoginForm/LoginForm';

class Login extends Component {
  state = {
    formElements: {
      email: {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter email',
        autoComplete: 'on',
        value: '',
        isSubmitted: true,
      },
      password: {
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Enter password',
        autoComplete: 'on',
        value: '',
        isSubmitted: true,
      },
    },
    formEndpoint: 'user/login',
    method: 'post',
  };

  render() {
    return (
      <LoginForm
        formElements={this.state.formElements}
        formEndpoint={this.state.formEndpoint}
        method={this.state.method}
      />
    );
  }
}

export default Login;
