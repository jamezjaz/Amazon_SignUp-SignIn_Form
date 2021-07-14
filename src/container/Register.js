import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterStyles from '../styles/RegisterStyles.module.css';
import caretRight from '../assets/caret-right.svg';
import Data from '../components/Data';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    } else {
      setConfirmPassword(event.target.value);
    }
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
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div className={RegisterStyles.formLabel}>
                  <p>Email</p>
                  <input
                    name="email"
                    type="text"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className={RegisterStyles.formLabel}>
                  <p>Password</p>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <small className="text-start px-3">Passwords must be at least 6 characters.</small>
                <div className={RegisterStyles.formLabel}>
                  <p>Re-enter password</p>
                  <input
                    id="conf-password"
                    name="conf-password"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChange}
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
              name={name}
              email={email}
              password={password}
            />
          )
      }
    </div>
  );
};

export default Register;
