import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterStyles from '../styles/RegisterStyles.module.css';

const Register = () => { // eslint-disable-line
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleNameChange = event => {
    setState({
      ...state,
      name: event.target.value,
    });
  };

  const handleEmailChange = event => {
    setState({
      ...state,
      email: event.target.value,
    });
  };

  const handlePasswordChange = event => {
    setState({
      ...state,
      password: event.target.value,
    });
  };

  const handleConfirmPasswordChange = event => {
    setState({
      ...state,
      confirm_password: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(state);
    // alert(`${state.name} ${state.email} ${state.password}`);
    alert(`Welcome ${state.name}!`);
    setState({
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    });
  };

  return (
    <div className={RegisterStyles.container}>
      <form className={RegisterStyles.form} onSubmit={handleSubmit}>
        <h4>{state.name}</h4>
        <h3>Create account</h3>
        <label htmlFor="name" className="text-left">
          Your Name
          <br />
          <input
            id="name"
            name="name"
            type="text"
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <br />
          <input
            id="email"
            name="email"
            type="text"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <br />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="At least 6 characters"
            value={state.password}
            onChange={handlePasswordChange}
          />
        </label>
        <small>Passwords must be at least 6 characters.</small>
        <label htmlFor="conf-password">
          Re-enter password
          <br />
          <input
            id="conf-password"
            name="conf-password"
            type="password"
            value={state.confirm_password}
            onChange={handleConfirmPasswordChange}
          />
        </label>
        <div>
          <button type="submit" className={`${RegisterStyles.btn} btn`}>Create your Amazon account</button>
        </div>
        <small>
          By creating an account, you agree to Amazon&apos;s
          <br />
          <Link to="/">Conditions of Use</Link>
          and
          <Link to="/">Privacy Notice.</Link>
        </small>
        <div className="my-4">
          <span>Already have an account? </span>
          <Link to="/sign-in">Sign-in</Link>
        </div>
      </form>
      <div className="mb-4">
        <Link to="/">Conditions of Use  Privacy Notice  Help</Link>
        <br />
        <small>© 1996-2021, Amazon.com, Inc. or its affiliates</small>
      </div>
    </div>
  );
};

export default Register;
