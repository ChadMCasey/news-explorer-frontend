import React from "react";
import "./SearchForm.css";
import useFormAndValidation from "../../hooks/useFormAndValidation";

const SearchForm = () => {
  const {
    values,
    errors,
    handleChange,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  } = useFormAndValidation();

  return (
    <form className="search-form">
      <input
        type="text"
        name="topic"
        placeholder="Enter Topic"
        className="search-form__input"
        value={values.topic}
        onChange={handleChange}
      />
      <button type="submit" className="search-form__submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
