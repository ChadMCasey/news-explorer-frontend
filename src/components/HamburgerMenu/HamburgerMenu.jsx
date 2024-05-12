import { useContext } from "react";
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
        color: "#fff",
      };
    }
  };

  const closeHamburgerModal = (e) => {
    if (e.target === e.currentTarget) {
      setActiveModal("");
    }
  };

  return (
    <div
      onClick={closeHamburgerModal}
      className={`hamburger-menu ${isOpen && "hamburger-menu_visible"}`}
    >
      <div className="hamburger-menu__container">
        <div className="hamburger-menu__logo-section">
          <NavLink
            to="/"
            className="hamburger-menu__link logo"
            onClick={() => setActiveModal("")}
          >
            NewsExplorer
          </NavLink>
          <button
            className="hamburger-menu__close"
            onClick={() => setActiveModal("")}
          ></button>
        </div>
        <NavLink
          to="/"
          style={style}
          className="hamburger-menu__link home"
          onClick={() => setActiveModal("")}
        >
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink
              to="/saved-news"
              style={style}
              className="hamburger-menu__link saved-articles"
              onClick={() => setActiveModal("")}
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
