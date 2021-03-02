import React, { Component } from 'react';

import SignupForm from '../../../components/Users/SignupForm/SignupForm';

class Signup extends Component {
  state = {
    formElements: {
      first_name: {
        label: 'First Name',
        type: 'text',
        name: 'first_name',
        placeholder: 'Enter first name',
        autoComplete: 'on',
        value: '',
        isSubmitted: true,
      },
      last_name: {
        label: 'Last Name',
        type: 'text',
        name: 'last_name',
        placeholder: 'Enter last name',
        autoComplete: 'on',
        value: '',
        isSubmitted: true,
      },
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
      confirmedPassword: {
        label: 'Confirm Password',
        type: 'password',
        name: 'confirmedPassword',
        placeholder: 'Confirm name',
        autoComplete: 'on',
        value: '',
        isSubmitted: false,
      },
      receive_emails: {
        label: 'Receive email updates',
        type: 'checkbox',
        name: 'receive_emails',
        placeholder: 'Receive email updates',
        autoComplete: 'on',
        value: false,
        isSubmitted: true,
      },
    },
    formEndpoint: 'user',
    method: 'post',
  };

  render() {
    return (
      <SignupForm
        formElements={this.state.formElements}
        formEndpoint={this.state.formEndpoint}
        method={this.state.method}
      />
    );
  }
}

export default Signup;
