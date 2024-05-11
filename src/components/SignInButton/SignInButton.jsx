import React, { useContext } from "react";
import { ModalStateContext } from "../../context/ModalStateContext";
import "./SignInButton.css";

const SignInButton = () => {
  const { setActiveModal } = useContext(ModalStateContext);
  return (
    <button
      className={`nav__link nav__link_type_signin`}
      onClick={() => setActiveModal("signin-modal")}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
