import { NavLink } from "react-router-dom";
import SignInButton from "../SignInButton/SignInButton";
import "./NavigationLoggedOut.css";

const NavigationNotLoggedIn = ({ style, className }) => {
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
          activeClass(`${className} nav__link nav__link_type_home`, isActive)
        }
      >
        Home
      </NavLink>
      <SignInButton />
    </>
  );
};

export default NavigationNotLoggedIn;
