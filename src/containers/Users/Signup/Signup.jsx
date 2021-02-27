import React, { Component } from 'react';
import SignupForm from '../../../components/Users/SignupForm/SignupForm';

import axios from '../../../axios';

class Signup extends Component {
  state = {
    formElements: {
      first_name: {
        label: 'First Name',
        type: 'text',
        name: 'first_name',
        placeholder: 'Enter first name',
        autocomplete: 'first name',
        value: '',
      },
      last_name: {
        label: 'Last Name',
        type: 'text',
        name: 'last_name',
        placeholder: 'Enter last name',
        autocomplete: 'last name',
        value: '',
      },
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
      confirmedPassword: {
        label: 'Confirm Password',
        type: 'password',
        name: 'confirmedPassword',
        placeholder: 'Confirm name',
        autocomplete: 'confirm password',
        value: '',
      },
      receive_emails: {
        label: 'Receive email updates',
        type: 'checkbox',
        name: 'receive_emails',
        placeholder: 'Receive email updates',
        autocomplete: 'receive email updates',
        value: '',
      },
    },
  };

  handleInputChange = (e) => {
    let { name, value, type } = e.target;

    if (type === 'checkbox') {
      value = e.target.checked;
    }

    const { formElements } = { ...this.state };
    formElements[name].value = value;
    this.setState({ formElements });
  };

  handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const body = {
        first_name: this.state.formElements.first_name.value,
        last_name: this.state.formElements.last_name.value,
        email: this.state.formElements.email.value,
        password: this.state.formElements.password.value,
        receive_emails: this.state.formElements.receive_emails.value,
      };

      await axios.users.post(null, body);
    } catch (error) {
      // handle error here
    }
  };

  render() {
    return (
      <SignupForm
        formElements={this.state.formElements}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Signup;
