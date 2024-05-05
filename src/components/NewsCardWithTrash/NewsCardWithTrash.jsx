import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardWithTrash.css";

const NewsCardWithTrash = (props) => {
  return (
    <NewsCard {...props}>
      <button className="trash"></button>
    </NewsCard>
  );
};

export default NewsCardWithTrash;
