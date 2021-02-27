import React from 'react';
import propTypes from 'prop-types';

import Input from '../../components/UI/Input/Input';

const FormBuilder = (props) => {
  return Object.values(props.formElements).map((element, index) => {
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
  });
};

FormBuilder.propTypes = {
  formElements: propTypes.object.isRequired,
  handleInputChange: propTypes.func.isRequired,
};

export default FormBuilder;
