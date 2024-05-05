import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardWithBookmark.css";

const NewsCardWithBookmark = (props) => {
  return (
    <>
      <NewsCard {...props}>
        <button className="bookmark"></button>
        <div className="bookmark-prompt">
          <p className="bookmark-prompt__text">Sign in to save articles</p>
        </div>
      </NewsCard>
    </>
  );
};

export default NewsCardWithBookmark;
