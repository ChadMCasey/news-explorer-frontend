import React, { useState } from "react";
import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SavedNews = ({ placeholderCards }) => {
  const [displayedResults, setDisplayedResults] = useState(
    placeholderCards.filter((card) => card.isBookMarked)
  );

  const removeBookMarkedCard = (card) => {
    card.isBookMarked = false;
    setDisplayedResults(placeholderCards.filter((card) => card.isBookMarked));
  };

  return (
    <section className="saved-news-list">
      {displayedResults.length === 0 ? (
        <div className="saved-news-list__placeholder">
          <p className="saved-news-list__heading">No articles found</p>
          <p className="saved-news-list__description">
            Your saved news articles will appear here.
          </p>
        </div>
      ) : (
        <NewsCardList
          displayedResults={displayedResults}
          removeBookMarkedCard={removeBookMarkedCard}
        />
      )}
    </section>
  );
};

export default SavedNews;
