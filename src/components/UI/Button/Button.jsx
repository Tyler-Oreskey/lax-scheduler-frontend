import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => <button>{props.buttonText}</button>;

Button.propTypes = {
  type: propTypes.string.isRequired,
  buttonText: propTypes.string.isRequired,
  class: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default Button;
