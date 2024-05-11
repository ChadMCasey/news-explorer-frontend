import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationLoggedIn.css";
import SignoutButton from "../SignoutButton/SignoutButton";

const NavigationLoggedIn = ({
  style,
  setActiveModal,
  userData,
  handleSignOut,
  page,
}) => {
  return (
    <>
      <NavLink
        style={style}
        to="/"
        className={`nav__link ${page} nav__link_type_home`}
      >
        Home
      </NavLink>
      <NavLink
        style={style}
        to="/saved-news"
        className={`nav__link ${page} nav__link_type_saved-articles`}
      >
        Saved Articles
      </NavLink>
      <SignoutButton page={page} />
    </>
  );
};

export default NavigationLoggedIn;
