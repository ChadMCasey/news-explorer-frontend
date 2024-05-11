import React, { useEffect } from "react";

import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

const SearchResults = ({
  isSearchResultLoading,
  userInputtedSearch,
  searchResultData,
  setShowMore,
  showMore,
}) => {
  const isNoSearchResult = Object.keys(searchResultData).length === 0; // empty search result object means no result
  const displayedResults = showMore
    ? searchResultData.slice()
    : searchResultData.slice(0, 3);

  const showToggle = () => setShowMore((boolean) => !boolean);

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
            <NewsCardList
              displayedResults={displayedResults}
              cardType="bookmark"
            />
            <button className="results__more" onClick={showToggle}>
              {showMore ? "Show less" : "Show more"}
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
