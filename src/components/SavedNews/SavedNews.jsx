import "./SavedNews.css";
import { useEffect } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import BackendAPI from "../../utils/BackendAPI";

const SavedNews = ({
  userCardData,
  removeBookMarkedCard,
  fetchUserArticleData,
}) => {
  useEffect(() => {
    fetchUserArticleData();
  }, []);

  return (
    <section className="saved-news-list">
      {userCardData.length === 0 ? (
        <div className="saved-news-list__placeholder">
          <p className="saved-news-list__heading">No articles found</p>
          <p className="saved-news-list__description">
            Your saved news articles will appear here.
          </p>
        </div>
      ) : (
        <NewsCardList
          displayedResults={userCardData}
          removeBookMarkedCard={removeBookMarkedCard}
        />
      )}
    </section>
  );
};

export default SavedNews;
