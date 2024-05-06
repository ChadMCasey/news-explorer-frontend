import React from "react";

import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard.jsx";
import NewsCardWithBookmark from "../NewsCardWithBookmark/NewsCardWithBookmark.jsx";
import NewsCardWithTrash from "../NewsCardWithTrash/NewsCardWithTrash.jsx";
import { placeholderCards } from "../../utils/constants.js";

const NewsCardList = () => {
  return (
    <ul className="cards">
      {placeholderCards.map((card, i) => {
        return <NewsCardWithBookmark key={i} card={card} />;
      })}
    </ul>
  );
};

export default NewsCardList;
