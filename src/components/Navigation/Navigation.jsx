import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__li">
          <Link to="/" className="nav__link nav__link_type_logo">
            NewsExplorer
          </Link>
        </li>

        <li className="nav__li">
          <Link to="/" className="nav__link nav__link_type_home">
            Home
          </Link>
          <button className="nav__signin">Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
