import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
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
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Form;
