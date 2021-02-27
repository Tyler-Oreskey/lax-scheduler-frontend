import React from 'react';
import propTypes from 'prop-types';

const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

Input.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  autocomplete: propTypes.string.isRequired,
  value: propTypes.any.isRequired,
  placeholder: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Input;
