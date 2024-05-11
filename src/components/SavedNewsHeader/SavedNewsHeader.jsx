import React from "react";
import "./SavedNewsHeader.css";

const SavedNewsHeader = () => {
  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container">
        <h3 className="saved-news-header__heading">Saved articles</h3>
        <p className="saved-news-header__description">
          Elise, you have 5 saved articles
        </p>
        <p className="saved-news-header__keywords">
          By keywords:{" "}
          <span className="saved-news-header__keyword">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </section>
  );
};

export default SavedNewsHeader;
