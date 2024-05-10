import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationLoggedIn.css";
import SignoutButton from "../SignoutButton/SignoutButton";

const NavigationLoggedIn = ({
  style,
  setActiveModal,
  className,
  userData,
  handleSignOut,
}) => {
  return (
    <>
      <NavLink
        style={style}
        to="/"
        className={`${className} nav__link nav__link_type_home`}
      >
        Home
      </NavLink>
      <NavLink
        style={style}
        to="/saved-articles"
        className="nav__link nav__link_type_saved-articles"
      >
        Saved Articles
      </NavLink>
      <SignoutButton />
    </>
  );
};

export default NavigationLoggedIn;
