import React from "react";
import "./SearchForm.css";
import useFormAndValidation from "../../hooks/useFormAndValidation";

const SearchForm = (props) => {
  const { handleUserSearch } = props;

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
    if (values.topic) {
      handleUserSearch(values.topic);
    }

    e.preventDefault();
    resetForm();
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
