import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          onChange={props.handleInputChange}
          value={props.first_name}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          onChange={props.handleInputChange}
          value={props.last_name}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={props.handleInputChange}
          value={props.email}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={props.handleInputChange}
          value={props.password}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmedPassword"
          onChange={props.handleInputChange}
          value={props.confirmedPassword}
        />
      </div>
      <div>
        <label>Receive email updated</label>
        <input
          type="checkbox"
          name="receive_emails"
          onChange={props.handleChecked}
          value={props.receive_emails}
        />
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default Form;
