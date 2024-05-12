import React from "react";
import SearchErrorIcon from "../../assets/search-error.svg";
import "./SearchError.css";

const SearchError = () => {
  return (
    <section className="search-error">
      <img
        src={SearchErrorIcon}
        alt="A circle with an exclimation mark within it"
        className="search-error__icon"
      />
      <h3 className="search-error__heading">Uh oh...</h3>
      <p className="search-error__subheading">
        something went wrong during the request. There may be a connection issue
        or the server may be down. Please try again later.
      </p>
    </section>
  );
};

export default SearchError;
