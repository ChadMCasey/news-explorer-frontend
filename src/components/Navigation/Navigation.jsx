import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ModalStateContext } from "../../context/ModalStateContext";
import { IsLoggedInContext } from "../../context/IsLoggedInContext";
import { UserDataContext } from "../../context/UserDataContext";
import NavigationLoggedOut from "../NavigationLoggedOut/NavigationLoggedOut";
import NavigationLoggedIn from "../NavigationLoggedIn/NavigationLoggedIn";

import "./Navigation.css";

const Navigation = () => {
  const { setActiveModal } = useContext(ModalStateContext);
  const { isLoggedIn, handleSignOut } = useContext(IsLoggedInContext);
  const userData = useContext(UserDataContext);

  const style = ({ isActive }) => {
    if (isActive) {
      return {
        borderBottom: "3px solid #fff",
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

        <li className="nav__li desktop">
          {isLoggedIn ? (
            <NavigationLoggedIn
              style={style}
              setActiveModal={setActiveModal}
              userData={userData}
              handleSignOut={handleSignOut}
              className="logged-in"
            />
          ) : (
            <NavigationLoggedOut
              style={style}
              setActiveModal={setActiveModal}
              className="logged-out"
            />
          )}
        </li>

        <li className="nav__li mobile">
          <div className="hamburger">
            <div className="hamburger__bar"></div>
            <div className="hamburger__bar"></div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
