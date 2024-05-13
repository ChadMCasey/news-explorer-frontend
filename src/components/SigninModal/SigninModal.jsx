import { useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SigninModal.css";
import "../../styles/form.css";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { ModalStateContext } from "../../context/ModalStateContext";

const SigninModal = ({ handleSignIn }) => {
  const { setActiveModal } = useContext(ModalStateContext);

  const { values, errors, handleChange, isValid, resetForm } =
    useFormAndValidation();

  function signInSubmit(e) {
    e.preventDefault();
    handleSignIn(values, resetForm);
  }

  return (
    <ModalWithForm title="signin-modal" handleSubmit={signInSubmit}>
      <h3 className="form__heading">Sign in</h3>
      <fieldset className="form__fieldset">
        <label className="form__label">
          Email
          <input
            type="email"
            className="form__input"
            name="email"
            placeholder="Enter Email"
            value={values.email || ""}
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
            className="form__input form__input_type_password"
            name="password"
            placeholder="Enter Password"
            value={values.password || ""}
            onChange={handleChange}
            minLength={8}
            required
          />
          <span
            className={`form__input-error error-text ${
              errors.password && "error-text_display"
            }`}
          >
            Invalid passsword
          </span>
        </label>
      </fieldset>
      <button className="form__submit" disabled={!isValid}>
        Sign in
      </button>
      <div className="form__link-area">
        <span className="form__link-text">or </span>
        <button
          className="modal__teriary-link form__link-button"
          type="button"
          onClick={() => setActiveModal("signup-modal")}
        >
          Sign up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default SigninModal;
