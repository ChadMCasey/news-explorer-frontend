import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* > 480px */}
      <div className="footer__content desktop">
        <p className="footer__copywright">
          © 2024 Supersite, Powered by News API
        </p>
        <div className="footer__links">
          <Link className="footer__link footer__link_home">Home</Link>
          <Link className="footer__link footer__link_triple">TripleTen</Link>
          <Link className="footer__link footer__link_github"></Link>
          <Link className="footer__link footer__link_facebook"></Link>
        </div>
      </div>

      {/* <= 480px */}
      <div className="footer__content mobile">
        <div className="footer__row-one">
          <div className="footer__links pages">
            <Link className="footer__link footer__link_home">Home</Link>
            <Link className="footer__link footer__link_triple">TripleTen</Link>
          </div>
          <div className="footer__links icons">
            <Link className="footer__link footer__link_github"></Link>
            <Link className="footer__link footer__link_facebook"></Link>
          </div>
        </div>

        <div className="footer__row-two">
          <p className="footer__copywright">
            © 2024 Supersite, Powered by News API
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
