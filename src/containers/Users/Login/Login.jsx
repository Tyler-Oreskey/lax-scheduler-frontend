import React, { Component } from 'react';

import axios from '../../../axios';
import FormBuilder from '../../../hoc/Form/FormBuilder';
import Button from '../../../components/UI/Button/Button';

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
      <form onSubmit={this.handleSubmit}>
        <FormBuilder
          formElements={this.state.formElements}
          handleInputChange={this.handleInputChange}
        />
        <Button type="submit" buttonText="Login" class="primary" />
      </form>
    );
  }
}

export default Login;
