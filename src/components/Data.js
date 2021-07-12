import React from 'react';
import PropTypes from 'prop-types';

const Data = props => {
  const { name, email, password } = props;
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Your Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

Data.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

// Data.defaultProps = {
//   name: '',
// };

export default Data;
