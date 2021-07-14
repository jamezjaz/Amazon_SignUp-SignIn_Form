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
        <div className={ResetStyles.formLabel}>
          <p>Email or mobile phone number</p>
          <input
            id="email"
            name="email"
            type="text"
          />
        </div>
        <div>
          <button type="submit" className={`${ResetStyles.btn} btn text-white`}>Continue</button>
        </div>
      </form>
      <div className="text-start my-3">
        <span>Has your email or mobile number changed?</span>
        <br />
        <small>
          If you no longer use the email address associated with your
          Amazon account, you may contact
          <Link to="/">Customer Service</Link>
          for help restoring access to your account.
        </small>
      </div>
    </div>
  </div>
);

export default PasswordReset;
