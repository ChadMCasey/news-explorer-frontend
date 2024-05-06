import React, { useEffect } from "react";

import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";

const SearchResults = (props) => {
  const { isSearchResultLoading, userInputtedSearch } = props;

  // no user inputted search
  if (userInputtedSearch === "") {
    return;
  }

  if (isSearchResultLoading) {
    // loading
    return (
      <section className="results">
        <div className="results__content">
          <Preloader />
          <p className="result__searching">Searching for news...</p>
        </div>
      </section>
    );
  }

  // results
  return (
    <section className="results">
      <div className="results__content">
        <h2 className="results__header">Search Results</h2>
        <NewsCardList />
        <button className="results__more">Show more</button>
      </div>
    </section>
  );
};

export default SearchResults;
