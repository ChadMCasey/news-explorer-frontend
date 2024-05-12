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
  function activeClass(classes, active) {
    if (active.isActive) {
      return classes + " " + "after";
    }
    return classes;
  }

  return (
    <>
      <NavLink
        style={style}
        to="/"
        className={(isActive) =>
          activeClass(`nav__link ${page} nav__link_type_home`, isActive)
        }
      >
        Home
      </NavLink>
      <NavLink
        style={style}
        to="/saved-news"
        className={(isActive) =>
          activeClass(
            `nav__link ${page} nav__link_type_saved-articles`,
            isActive
          )
        }
      >
        Saved Articles
      </NavLink>
      <SignoutButton page={page} />
    </>
  );
};

export default NavigationLoggedIn;
