import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copywright">
          © 2024 Supersite, Powered by News API
        </p>
        <div className="footer__links">
          <Link className="footer__link">Home</Link>
          <Link className="footer__link">TripleTen</Link>
          <Link className="footer__link footer__link_github"></Link>
          <Link className="footer__link footer__link_facebook"></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
