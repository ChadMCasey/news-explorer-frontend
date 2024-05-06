import React, { useEffect } from "react";

import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

const SearchResults = (props) => {
  const { isSearchResultLoading, userInputtedSearch, searchResultData } = props;
  const isNoSearchResult = Object.keys(searchResultData).length === 0; // empty search result object means no result

  // no user inputted search
  if (userInputtedSearch === "") {
    return;
  }

  // loading
  if (isSearchResultLoading) {
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
        {isNoSearchResult ? (
          <NothingFound />
        ) : (
          <>
            <h2 className="results__header">Search Results</h2>
            <NewsCardList />
            <button className="results__more">Show more</button>
          </>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
