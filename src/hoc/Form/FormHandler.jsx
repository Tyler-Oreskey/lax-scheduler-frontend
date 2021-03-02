import React, { Component } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

const FormHandler = (Form) => {
  return class extends Component {
    static propTypes = {
      formElements: propTypes.object.isRequired,
      formEndpoint: propTypes.string.isRequired,
      method: propTypes.string.isRequired,
    };

    state = {
      formElements: { ...this.props.formElements },
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
      e.preventDefault();
      try {
        const body = Object.values(this.state.formElements)
          .filter((formElement) => formElement.isSubmitted)
          .reduce(
            (object, element) => ({ ...object, [element.name]: element.value }),
            {}
          );

        await axios[this.props.method](
          `${process.env.REACT_APP_BASE_URL}/${this.props.formEndpoint}`,
          body
        );
      } catch (error) {
        // handle error here
      }
    };

    render() {
      return (
        <Form
          {...this.props}
          formElements={this.state.formElements}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };
};

export default FormHandler;
