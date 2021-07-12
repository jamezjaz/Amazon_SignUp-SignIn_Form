import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterStyles from '../styles/RegisterStyles.module.css';
import caretRight from '../assets/caret-right.svg';
import Data from '../components/Data';

const Register = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    // console.log(state);
    // alert(`Welcome ${state.name}!`);
    setIsSubmitted(true);
  };
  return (
    <div className={RegisterStyles.container}>
      {
        (isSubmitted === false)
          ? (
            <div className={RegisterStyles.formContainer}>
              <form onSubmit={handleSubmit}>
                <h3>Create account</h3>
                <div className={RegisterStyles.formLabel}>
                  <p>Your name</p>
                  <input
                    name="name"
                    type="text"
                    value={state.name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className={RegisterStyles.formLabel}>
                  <p>Email</p>
                  <input
                    name="email"
                    type="text"
                    value={state.email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className={RegisterStyles.formLabel}>
                  <p>Password</p>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="At least 6 characters"
                    value={state.password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <small className="text-start px-3">Passwords must be at least 6 characters.</small>
                <div className={RegisterStyles.formLabel}>
                  <p>Re-enter password</p>
                  <input
                    id="conf-password"
                    name="conf-password"
                    type="password"
                    value={state.confirm_password}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                <div>
                  <button type="submit" className={`${RegisterStyles.btn} btn`}>Create your Amazon account</button>
                </div>
                <small className="text-start px-3">
                  By creating an account, you agree to Amazon&apos;s
                  <br />
                  <Link to="/">Conditions of Use</Link>
                  and
                  <Link to="/">Privacy Notice.</Link>
                </small>
                <div className="text-start px-3 my-3">
                  <span>Already have an account? </span>
                  <Link to="/login">
                    Sign-in
                    {' '}
                    <img src={caretRight} alt="caret-right" />
                  </Link>
                </div>
              </form>
            </div>
          )
          : (
            <Data
              name={state.name}
              email={state.email}
              password={state.password}
            />
          )
      }
    </div>
  );
};

export default Register;
