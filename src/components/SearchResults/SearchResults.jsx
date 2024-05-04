import React from "react";

import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SearchResults = () => {
  return (
    <section className="results">
      <div className="results__content">
        <h3 className="results__header">Search Results</h3>
        <NewsCardList />
        <button className="results__more">Show more</button>
      </div>
    </section>
  );
};

export default SearchResults;
