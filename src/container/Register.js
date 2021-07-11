import React from 'react';
import { Link } from 'react-router-dom';
import RegisterStyles from '../styles/RegisterStyles.module.css';

const Register = () => { // eslint-disable-line
  return (
    <div className={RegisterStyles.container}>
      <form className={RegisterStyles.form}>
        <h3>Create account</h3>
        <label htmlFor="name" className="text-left">
          Your Name
          <br />
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
          />
        </label>
        <label htmlFor="email">
          Email
          <br />
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Your Email"
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
      <div>
        <Link to="/">Conditions of Use  Privacy Notice  Help</Link>
        <br />
        <small>© 1996-2021, Amazon.com, Inc. or its affiliates</small>
      </div>
    </div>
  );
};

export default Register;
