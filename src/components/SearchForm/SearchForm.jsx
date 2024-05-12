import React, { useContext } from "react";
import "./SearchForm.css";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { ModalStateContext } from "../../context/ModalStateContext";

const SearchForm = ({ handleUserSearch }) => {
  const { activeModal, setActiveModal } = useContext(ModalStateContext);

  const {
    values,
    errors,
    handleChange,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  } = useFormAndValidation();

  function handleSearchSubmission(e) {
    e.preventDefault();

    if (!values.topic || values.topic === "") {
      setActiveModal("empty-search-modal");
    } else {
      handleUserSearch(values.topic, resetForm);
    }
  }

  return (
    <form className="search-form" onSubmit={handleSearchSubmission}>
      <input
        type="text"
        name="topic"
        placeholder="Enter Topic"
        className="search-form__input"
        value={values.topic || ""}
        onChange={handleChange}
      />
      <button type="submit" className="search-form__submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
