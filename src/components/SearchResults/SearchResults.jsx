import React from "react";

import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SearchResults = () => {
  return (
    <section className="results">
      <div className="results__content">
        {/* headings of some sort */}
        <NewsCardList />
        {/* other content of some sort */}
      </div>
    </section>
  );
};

export default SearchResults;
