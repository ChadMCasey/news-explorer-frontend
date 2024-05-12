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
          <Link to="/" className="footer__link footer__link_home">
            Home
          </Link>
          <Link
            to="https://tripleten.com/"
            className="footer__link footer__link_triple"
            target="_blank"
          >
            TripleTen
          </Link>
          <Link
            to="https://github.com/ChadMCasey"
            className="footer__link footer__link_github"
            target="_blank"
          ></Link>
          <Link
            to="https://www.facebook.com/"
            className="footer__link footer__link_facebook"
            target="_blank"
          ></Link>
        </div>
      </div>

      {/* <= 480px */}
      <div className="footer__content mobile">
        <div className="footer__row-one">
          <div className="footer__links pages">
            <Link to="/" className="footer__link footer__link_home">
              Home
            </Link>
            <Link
              to="https://tripleten.com/"
              className="footer__link footer__link_triple"
              target="_blank"
            >
              TripleTen
            </Link>
          </div>
          <div className="footer__links icons">
            <Link
              to="https://github.com/ChadMCasey"
              className="footer__link footer__link_github"
              target="_blank"
            ></Link>
            <Link
              to="https://www.facebook.com/"
              className="footer__link footer__link_facebook"
              target="_blank"
            ></Link>
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
