import React from 'react';
import './style.scss';

const Footer = ({ url, author }) => (
  <div className="footer">
    <div className="container text-center">
      <hr className="border-primary" />
      <p>
        Built by <a href={url}>{author}</a>
      </p>
    </div>
  </div>
);

export default Footer;
