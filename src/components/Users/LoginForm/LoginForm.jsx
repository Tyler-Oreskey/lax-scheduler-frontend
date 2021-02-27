import React from 'react';
import propTypes from 'prop-types';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const LoginForm = (props) => {
  const formElements = Object.values(props.formElements).map(
    (element, index) => {
      return (
        <Input
          key={index}
          label={element.label}
          type={element.type}
          name={element.name}
          placeholder={element.placeholder}
          autocomplete={element.autocomplete}
          value={element.value}
          onChange={props.handleInputChange}
        />
      );
    }
  );
  return (
    <form onSubmit={props.handleSubmit}>
      {formElements}
      <Button type="submit" buttonText="Login" class="primary" />
    </form>
  );
};

LoginForm.propTypes = {
  formElements: propTypes.object.isRequired,
  handleInputChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

export default LoginForm;
