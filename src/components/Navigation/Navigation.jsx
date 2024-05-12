import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ModalStateContext } from "../../context/ModalStateContext";
import { IsLoggedInContext } from "../../context/IsLoggedInContext";
import { UserDataContext } from "../../context/UserDataContext";
import NavigationLoggedOut from "../NavigationLoggedOut/NavigationLoggedOut";
import NavigationLoggedIn from "../NavigationLoggedIn/NavigationLoggedIn";

import "./Navigation.css";

const Navigation = ({ page }) => {
  const { setActiveModal } = useContext(ModalStateContext);
  const { isLoggedIn } = useContext(IsLoggedInContext);
  const userData = useContext(UserDataContext);

  const style = ({ isActive }) => {
    if (isActive) {
      return {
        color: page === "/" ? "#fff" : "#000",
      };
    }
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__li">
          <NavLink
            to="/"
            className={`nav__link ${page || ""} nav__link_type_logo`}
          >
            NewsExplorer
          </NavLink>
        </li>

        <li className="nav__li desktop">
          {isLoggedIn ? (
            <NavigationLoggedIn
              style={style}
              page={page || ""}
              setActiveModal={setActiveModal}
              userData={userData}
            />
          ) : (
            <NavigationLoggedOut
              style={style}
              page={page || ""}
              setActiveModal={setActiveModal}
            />
          )}
        </li>

        <li className="nav__li mobile">
          <div
            className="hamburger"
            onClick={() => setActiveModal("hamburger-menu")}
          >
            <div className={`${page || ""} hamburger__bar`}></div>
            <div className={`${page || ""} hamburger__bar`}></div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
