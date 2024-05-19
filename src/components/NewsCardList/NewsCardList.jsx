import "./NewsCardList.css";
import NewsCardWithBookmark from "../NewsCardWithBookmark/NewsCardWithBookmark.jsx";
import NewsCardWithTrash from "../NewsCardWithTrash/NewsCardWithTrash.jsx";

const NewsCardList = ({
  displayedResults,
  cardType,
  handleBookmarkInteraction,
  removeBookMarkedCard,
}) => {
  return (
    <ul className="cards">
      {displayedResults.map((card, i) => {
        if (cardType === "bookmark") {
          return (
            <NewsCardWithBookmark
              key={i}
              card={card}
              handleBookmarkInteraction={handleBookmarkInteraction}
            />
          );
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
