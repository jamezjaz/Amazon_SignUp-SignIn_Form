import React from 'react';
import { Link } from 'react-router-dom';
import LoginStyles from '../styles/LoginStyles.module.css';

const Login = () => { // eslint-disable-line
  return (
    <div>
      <form className={LoginStyles.form}>
        <h3>Sign-In</h3>
        <label htmlFor="email">
          Email or mobile phone number
          <br />
          <input
            id="email"
            name="email"
            type="text"
          />
        </label>
        <label htmlFor="password">
          Password
          <Link to="/forgotpassword">Forgot your password?</Link>
          <br />
          <input
            id="password"
            name="password"
            type="password"
          />
        </label>
        <div>
          <button type="submit" className={`${LoginStyles.btn} btn`}>Sign-In</button>
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
