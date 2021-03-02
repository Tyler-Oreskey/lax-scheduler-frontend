import React from 'react';
import propTypes from 'prop-types';

import Input from '../../components/UI/Input/Input';

const FormBuilder = (props) =>
  Object.values(props.formElements).map((element, index) => (
    <Input
      key={index}
      label={element.label}
      type={element.type}
      name={element.name}
      placeholder={element.placeholder}
      autoComplete={element.autoComplete}
      value={element.value}
      onChange={props.handleInputChange}
    />
  ));

FormBuilder.propTypes = {
  formElements: propTypes.objectOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      placeholder: propTypes.string.isRequired,
      autoComplete: propTypes.string.isRequired,
      value: propTypes.any.isRequired,
      isSubmitted: propTypes.bool.isRequired,
    })
  ),
  handleInputChange: propTypes.func.isRequired,
};

export default FormBuilder;
