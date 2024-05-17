import "./SavedNewsHeader.css";

const SavedNewsHeader = ({ userCardData }) => {
  let distinctKeywords = [];

  for (let card of userCardData) {
    if (!distinctKeywords.includes(card.keyword)) {
      distinctKeywords.push(card.keyword);
    }
  }

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container">
        <h3 className="saved-news-header__heading">Saved articles</h3>
        <p className="saved-news-header__description">
          Elise, you have {userCardData.length || 0} saved articles
        </p>
        {distinctKeywords.length > 0 ? (
          <p className="saved-news-header__keywords">
            By keywords:{" "}
            <span className="saved-news-header__keyword">
              {distinctKeywords.length === 1 && distinctKeywords[0]}
              {distinctKeywords.length === 2 &&
                distinctKeywords[0] + " and " + distinctKeywords[1]}
              {distinctKeywords.length > 2 &&
                distinctKeywords[0] +
                  ", " +
                  distinctKeywords[1] +
                  ` and ${distinctKeywords.length - 2} other`}
            </span>
          </p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default SavedNewsHeader;
