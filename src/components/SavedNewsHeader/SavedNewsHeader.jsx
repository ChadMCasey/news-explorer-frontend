import "./SavedNewsHeader.css";

const SavedNewsHeader = ({ userCardData }) => {
  let distinctKeywords = {};
  let sortedKeywords = [];
  let keywordString = "";

  userCardData.forEach((card) => {
    if (distinctKeywords[card.keyword]) {
      distinctKeywords[card.keyword]++;
    } else {
      distinctKeywords[card.keyword] = 1;
    }
  });

  for (let key in distinctKeywords) {
    sortedKeywords.push([key, distinctKeywords[key]]);
  }

  sortedKeywords.sort((a, b) => b[1] - a[1]);

  if (sortedKeywords.length <= 3) {
    // between 0 and 3 keywords
    if (sortedKeywords.length === 0) keywordString = `No Keywords`;
    if (sortedKeywords.length === 1) keywordString = `${sortedKeywords[0][0]}`;
    if (sortedKeywords.length === 2)
      keywordString = `${sortedKeywords[0][0]} and ${sortedKeywords[1][0]}`;
    if (sortedKeywords.length === 3)
      keywordString = `${sortedKeywords[0][0]}, ${sortedKeywords[1][0]} and ${sortedKeywords[2][0]}`;
  } else {
    // more than 3 keyword case
    keywordString = `${sortedKeywords[0][0]}, ${sortedKeywords[1][0]} and ${
      sortedKeywords.length - 2
    } other`;
  }

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container">
        <h3 className="saved-news-header__heading">Saved articles</h3>
        <p className="saved-news-header__description">
          Elise, you have {userCardData.length || 0} saved articles
        </p>
        <p className="saved-news-header__keywords">
          By keywords:{" "}
          <span className="saved-news-header__keyword">{keywordString}</span>
        </p>
      </div>
    </section>
  );
};

export default SavedNewsHeader;
