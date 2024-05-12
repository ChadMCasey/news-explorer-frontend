import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardWithTrash.css";

const NewsCardWithTrash = (props) => {
  const { card, removeBookMarkedCard } = props;

  return (
    <NewsCard {...props}>
      <button
        className="card-abs card__trash"
        onClick={() => removeBookMarkedCard(props.card)}
      ></button>
      <div className="card-abs card__remove-callout">
        Remove
        <span className="card__remove-callout-desktop"> from saved</span>
      </div>
      <div className="card-abs card__keyword">{card.keyword}</div>
    </NewsCard>
  );
};

export default NewsCardWithTrash;
