import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="my-3">
      <Link to="/">Conditions of Use  Privacy Notice  Help</Link>
      <br />
      <small>© 1996-2021, Amazon.com, Inc. or its affiliates</small>
    </div>
  </footer>
);

export default Footer;
