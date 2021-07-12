import React from 'react';
import { Link } from 'react-router-dom';
import ResetStyles from '../styles/ResetStyles.module.css';

const PasswordReset = () => (
  <div className={ResetStyles.container}>
    <div className={ResetStyles.formContainer}>
      <form className={`${ResetStyles.form} py-3`}>
        <h3>Password assistance</h3>
        <small>
          Enter the email address or mobile phone number
          <br />
          associated with your Amazon account.
        </small>
        <label htmlFor="email">
          Email or mobile phone number
          <br />
          <input
            id="email"
            name="email"
            type="text"
          />
        </label>
        <div>
          <button type="submit" className={`${ResetStyles.btn} btn text-white`}>Continue</button>
        </div>
      </form>
      <span>Has your email or mobile number changed?</span>
      <small>
        If you no longer use the email address associated with your
        <br />
        Amazon account, you may contact
        <Link to="/">Customer Service</Link>
        for
        <br />
        help restoring access to your account.
      </small>
    </div>
  </div>
);

export default PasswordReset;
