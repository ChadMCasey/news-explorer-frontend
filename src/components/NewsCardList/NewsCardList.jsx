import React from "react";

import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard.jsx";
import NewsCardWithBookmark from "../NewsCardWithBookmark/NewsCardWithBookmark.jsx";
import NewsCardWithTrash from "../NewsCardWithTrash/NewsCardWithTrash.jsx";

const NewsCardList = ({ displayedResults }) => {
  return (
    <ul className="cards">
      {displayedResults.map((card, i) => {
        return <NewsCardWithBookmark key={i} card={card} />;
      })}
    </ul>
  );
};

export default NewsCardList;
