import { useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { ModalStateContext } from "../../context/ModalStateContext";
import "../ModalWithForm/ModalWithForm.css";
import "../../styles/form.css";
import "./SignupModal.css";

const SignupModal = ({ handleSignUp }) => {
  const [emailUnavailable, setEmailUnavailable] = useState(false);

  const { setActiveModal } = useContext(ModalStateContext);

  const { values, errors, handleChange, isValid, resetForm } =
    useFormAndValidation();

  function signUpSubmit(e) {
    e.preventDefault();
    handleSignUp(values, resetForm, setEmailUnavailable);
  }

  return (
    <ModalWithForm handleSubmit={signUpSubmit} title="signup-modal">
      <h3 className="form__heading">Sign up</h3>
      <fieldset className="form__fieldset">
        <label className="form__label">
          Email
          <input
            type="email"
            name="email"
            className="form__input"
            value={values.email || ""}
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
          <span
            className={`form__input-error error-text ${
              errors.email && "error-text_display"
            }`}
          >
            Invalid email address
          </span>
        </label>
        <label className="form__label">
          Password
          <input
            type="password"
            name="password"
            className="form__input"
            value={values.password || ""}
            placeholder="Enter password"
            minLength={8}
            onChange={handleChange}
            required
          />
          <span
            className={`form__input-error error-text ${
              errors.password && "error-text_display"
            }`}
          >
            Invalid password
          </span>
        </label>
        <label className="form__label">
          Username
          <input
            type="text"
            name="username"
            className="form__input"
            value={values.username || ""}
            placeholder="Enter your username"
            minLength={3}
            onChange={handleChange}
            required
          />
        </label>
        <p
          className={`email-unavailable error-text ${
            emailUnavailable && "error-text_display"
          }`}
        >
          This email is not available
        </p>
        <button className="form__submit" disabled={!isValid}>
          Sign up
        </button>
      </fieldset>
      <div className="form__link-area">
        <span className="form__link-text">or </span>
        <button
          className="modal__teriary-link form__link-button"
          type="button"
          onClick={() => setActiveModal("signin-modal")}
        >
          Sign in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default SignupModal;
