import React, { useState } from "react";
import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SavedNews = ({ userCardData, removeBookMarkedCard }) => {
  return (
    <section className="saved-news-list">
      {userCardData.length === 0 ? (
        <div className="saved-news-list__placeholder">
          <p className="saved-news-list__heading">No articles found</p>
          <p className="saved-news-list__description">
            Your saved news articles will appear here.
          </p>
        </div>
      ) : (
        <NewsCardList
          displayedResults={userCardData}
          removeBookMarkedCard={removeBookMarkedCard}
        />
      )}
    </section>
  );
};

export default SavedNews;
