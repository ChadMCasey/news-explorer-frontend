import React, { useContext, useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardWithBookmark.css";

// contexts
import { IsLoggedInContext } from "../../context/IsLoggedInContext";

const NewsCardWithBookmark = ({ card, handleBookmarkInteraction }) => {
  const { isLoggedIn } = useContext(IsLoggedInContext);
  const [bookmarked, setIsBookmarked] = useState(false);
  const [hovered, setIsHovered] = useState(false);

  function handleBookmarkClick() {
    if (isLoggedIn) {
      setIsHovered(false);
      handleBookmarkInteraction(!bookmarked, card);
      setIsBookmarked(!bookmarked);
    }
  }

  function handleHover() {
    if (!bookmarked) {
      setIsHovered(true);
    }
  }

  function handleUnhover() {
    setIsHovered(false);
  }

  return (
    <>
      <NewsCard card={card}>
        <button
          className={`bookmark ${bookmarked && "bookmark_marked"} 
                               ${hovered && "bookmark_hovered"}`}
          onClick={handleBookmarkClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
        ></button>

        <div
          className={`bookmark-prompt ${!isLoggedIn && hovered && "active"}`}
        >
          <p className="bookmark-prompt__text">Sign in to save articles</p>
        </div>
      </NewsCard>
    </>
  );
};

export default NewsCardWithBookmark;
