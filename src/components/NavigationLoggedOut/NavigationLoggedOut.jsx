import React from "react";
import { NavLink } from "react-router-dom";
import SignInButton from "../SignInButton/SignInButton";
import "./NavigationLoggedOut.css";

const NavigationNotLoggedIn = ({ style, setActiveModal, className }) => {
  return (
    <>
      <NavLink
        style={style}
        to="/"
        className={`${className} nav__link nav__link_type_home`}
      >
        Home
      </NavLink>
      <SignInButton />
    </>
  );
};

export default NavigationNotLoggedIn;
