import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const style = ({ isActive }) => {
    if (isActive) {
      return {
        borderBottom: "3px solid #fff",
        paddingTop: 30,
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
            style={style}
            to="/"
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
