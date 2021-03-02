import React from 'react';

import FormBuilder from '../../../hoc/Form/FormBuilder';
import FormHandler from '../../../hoc/Form/FormHandler';
import Button from '../../../components/UI/Button/Button';

const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <FormBuilder
      formElements={props.formElements}
      handleInputChange={props.handleInputChange}
    />
    <Button type="submit" buttonText="Login" class="primary" />
  </form>
);

export default FormHandler(Form);
