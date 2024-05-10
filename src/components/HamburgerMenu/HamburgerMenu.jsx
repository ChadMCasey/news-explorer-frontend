import React from "react";
import { NavLink } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  return (
    <div className="hamburger-menu">
      <div className="hamburger-menu__container">
        <div className="hamburger-menu__logo-section">
          <NavLink to="/" className="hamburger-menu__link logo">
            NewsExplorer
          </NavLink>
          <button className="hamburger-menu__close"></button>
        </div>
        <NavLink className="hamburger-menu__link home">Home</NavLink>
        <button className="hamburger-menu__sign-in">Sign in</button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
