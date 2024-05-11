import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SignInButton from "../SignInButton/SignInButton";
import { ModalStateContext } from "../../context/ModalStateContext";
import { IsLoggedInContext } from "../../context/IsLoggedInContext";
import "./HamburgerMenu.css";
import SignoutButton from "../SignoutButton/SignoutButton";

const HamburgerMenu = () => {
  const { activeModal, setActiveModal } = useContext(ModalStateContext);
  const { isLoggedIn } = useContext(IsLoggedInContext);

  const isOpen = activeModal === "hamburger-menu";

  const style = ({ isActive }) => {
    if (isActive) {
      return {
        borderBottom: "1px solid #fff",
        color: "#fff",
      };
    }
  };

  return (
    <div className={`hamburger-menu ${isOpen && "hamburger-menu_visible"}`}>
      <div className="hamburger-menu__container">
        <div className="hamburger-menu__logo-section">
          <NavLink to="/" className="hamburger-menu__link logo">
            NewsExplorer
          </NavLink>
          <button
            className="hamburger-menu__close"
            onClick={() => setActiveModal("")}
          ></button>
        </div>
        <NavLink to="/" style={style} className="hamburger-menu__link home">
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink
              to="/saved-articles"
              style={style}
              className="hamburger-menu__link saved-articles"
            >
              Saved Articles
            </NavLink>
            <SignoutButton />
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
