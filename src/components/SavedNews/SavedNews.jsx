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
      <NewsCardList
        displayedResults={displayedResults}
        removeBookMarkedCard={removeBookMarkedCard}
      />
    </section>
  );
};

export default SavedNews;
