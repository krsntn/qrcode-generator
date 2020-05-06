import React from 'react';
import './style.scss';

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container text-center">
      <hr className="border-primary" />
      <p>
        Built by <a href="https://dev.karson.tk">{author}</a>
      </p>
    </div>
  </div>
);

export default Footer;
