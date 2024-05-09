import React from "react";
import { NavLink } from "react-router-dom";
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
      <button
        className="nav__link nav__link_type_signin"
        onClick={() => setActiveModal("signin-modal")}
      >
        Sign In
      </button>
    </>
  );
};

export default NavigationNotLoggedIn;
