import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardWithTrash.css";

const NewsCardWithTrash = (props) => {
  const { card, removeBookMarkedCard } = props;

  return (
    <NewsCard {...props}>
      <button
        className="card__trash"
        onClick={() => removeBookMarkedCard(props.card)}
      ></button>
      <div className="card__keyword">{card.keyword}</div>
    </NewsCard>
  );
};

export default NewsCardWithTrash;
