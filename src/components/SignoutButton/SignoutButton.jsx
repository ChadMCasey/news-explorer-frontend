import React, { useContext } from "react";
import { IsLoggedInContext } from "../../context/IsLoggedInContext";

const SignoutButton = () => {
  const { handleSignOut } = useContext(IsLoggedInContext);

  return (
    <button className="nav__link nav__link_type_logout" onClick={handleSignOut}>
      <span className="nav__user-name">Chad</span>
      <span className="nav__logout-icon"></span>
    </button>
  );
};

export default SignoutButton;
