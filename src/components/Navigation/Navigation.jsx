import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const customStyle = ({ isActive }) => {
    if (isActive) {
      // we can add the bottom border to the link tag (when active)
      // but also ensure that the link tag text doesnt shift up by
      // three pixels (from the border) with the following logic.
      return {
        borderBottom: "3px solid #fff",
        paddingBottom: 27,
        placeContent: "end",
      };
    }
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__li">
          <NavLink to="/" className="nav__link nav__link_type_logo">
            NewsExplorer
          </NavLink>
        </li>

        <li className="nav__li">
          <NavLink
            to="/"
            style={customStyle}
            className="nav__link nav__link_type_home"
          >
            Home
          </NavLink>
          <button className="nav__link nav__link_type_signin">Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
