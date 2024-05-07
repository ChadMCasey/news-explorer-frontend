import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SigninModal.css";

const SigninModal = () => {
  function signInSubmit(e) {
    e.preventDefault();
  }

  return (
    <ModalWithForm title="signin-modal" handleSubmit={signInSubmit}>
      <h3 className="signin-modal__title">Sign in</h3>
    </ModalWithForm>
  );
};

export default SigninModal;
