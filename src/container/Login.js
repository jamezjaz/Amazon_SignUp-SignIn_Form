import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginStyles from '../styles/LoginStyles.module.css';
import caretDown from '../assets/caret-down.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(email);
    // alert(`We're glad to have you on here again, ${email}`);
  };

  return (
    <div className={LoginStyles.container}>
      <div className={LoginStyles.formContainer}>
        <form className={LoginStyles.form} onSubmit={handleSubmit}>
          <h3>Sign-In</h3>
          <div className={LoginStyles.formLabel}>
            <p>Email or mobile phone number</p>
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className={LoginStyles.formLabel}>
            <p className="d-flex justify-content-between">
              Password
              <Link to="/passwordreset" style={{ textDecoration: 'none' }}>Forgot your password?</Link>
            </p>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className={`${LoginStyles.btn} btn text-white`}>Sign-In</button>
          </div>
          <small className="text-start px-3">
            By continuing, you agree to Amazon&apos;s
            <Link to="/">Conditions of Use</Link>
            and
            <Link to="/">Privacy Notice.</Link>
          </small>
          <label htmlFor="checkbox" className="text-start px-3 pt-2">
            <input type="checkbox" id="checkbox" />
            Keep me signed in.
            {' '}
            <Link to="/">
              Details
              {' '}
              <img src={caretDown} alt="caret-down" />
            </Link>
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
    </div>
  );
};

export default Login;
