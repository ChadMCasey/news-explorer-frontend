import React, { useEffect } from "react";

import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard.jsx";
import NewsCardWithBookmark from "../NewsCardWithBookmark/NewsCardWithBookmark.jsx";
import NewsCardWithTrash from "../NewsCardWithTrash/NewsCardWithTrash.jsx";

const NewsCardList = ({ displayedResults, cardType, removeBookMarkedCard }) => {
  return (
    <ul className="cards">
      {displayedResults.map((card, i) => {
        if (cardType === "bookmark") {
          return <NewsCardWithBookmark key={i} card={card} />;
        } else {
          return (
            <NewsCardWithTrash
              key={i}
              card={card}
              removeBookMarkedCard={removeBookMarkedCard}
            />
          );
        }
      })}
    </ul>
  );
};

export default NewsCardList;
