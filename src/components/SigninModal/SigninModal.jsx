import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SigninModal.css";
import "../../styles/form.css";
import useFormAndValidation from "../../hooks/useFormAndValidation";

const SigninModal = () => {
  const {
    values,
    errors,
    handleChange,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  } = useFormAndValidation();

  function signInSubmit(e) {
    e.preventDefault();
  }

  return (
    <ModalWithForm title="signin-modal" handleSubmit={signInSubmit}>
      <h3 className="form__heading">Sign in</h3>
      <fieldset className="form__fieldset">
        <label className="form__label">
          Email
          <input
            type="text"
            className="form__input"
            name="email"
            placeholder="Enter Email"
            value={values.email || ""}
            onChange={handleChange}
          />
        </label>
        <label className="form__label">
          Password
          <input
            type="password"
            className="form__input form__input_type_password"
            name="password"
            placeholder="Enter Password"
            value={values.password || ""}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <button className="form__submit">Sign in</button>
      <div className="form__link-area">
        <span className="form__link-text">or </span>
        <button className="form__link-button">Sign up</button>
      </div>
    </ModalWithForm>
  );
};

export default SigninModal;
