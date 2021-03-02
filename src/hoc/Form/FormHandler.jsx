import React, { Component } from 'react';
import axios from 'axios';

import propTypes from 'prop-types';

const FormHandler = (Form) => {
  const SubComponent = class extends Component {
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

      const body = Object.values(this.state.formElements)
        .filter((formElement) => formElement.isSubmitted)
        .reduce(
          (object, element) => ({ ...object, [element.name]: element.value }),
          {}
        );

      try {
        e.preventDefault();
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
  SubComponent.propTypes = {
    formElements: propTypes.object.isRequired,
    formEndpoint: propTypes.string.isRequired,
    method: propTypes.string.isRequired,
  };

  return SubComponent;
};

export default FormHandler;
