import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginStyles from '../styles/LoginStyles.module.css';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = event => {
    setValues({
      ...values,
      email: event.target.value,
    });
  };

  const handlePasswordChange = event => {
    setValues({
      ...values,
      password: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values);
    alert(`We're glad to have you on here again, ${values.email}`);
    setValues({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <form className={LoginStyles.form} onSubmit={handleSubmit}>
        <h3>Sign-In</h3>
        <label htmlFor="email">
          Email or mobile phone number
          <br />
          <input
            id="email"
            name="email"
            type="text"
            value={values.email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <Link to="/passwordreset">Forgot your password?</Link>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handlePasswordChange}
          />
        </label>
        <div>
          <button type="submit" className={`${LoginStyles.btn} btn text-white`}>Sign-In</button>
        </div>
        <small>
          By continuing, you agree to Amazon&apos;s
          <br />
          <Link to="/">Conditions of Use</Link>
          and
          <Link to="/">Privacy Notice.</Link>
        </small>
        <label htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          Keep me signed in.
          {' '}
          <Link to="/">Details</Link>
        </label>
        <div className="my-4">
          <small>New to Amazon? </small>
          <br />
          <Link to="/">
            <button type="button" className={`${LoginStyles.createBtn} btn`}>Create your Amazon account</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
