import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardWithTrash.css";

const NewsCardWithTrash = (props) => {
  const { card, removeBookMarkedCard } = props;

  console.log(card);

  return (
    <NewsCard {...props}>
      <button
        className="card-abs card__trash"
        onClick={() => removeBookMarkedCard(card)}
      ></button>
      <div className="card-abs card__remove-callout">
        Remove
        <span className="card__remove-callout-desktop"> from saved</span>
      </div>
      <div className="card-abs card__keyword">{"Something"}</div>
    </NewsCard>
  );
};

export default NewsCardWithTrash;
