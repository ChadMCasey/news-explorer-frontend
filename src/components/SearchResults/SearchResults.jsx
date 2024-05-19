import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import SearchError from "../SearchError/SearchError";

const SearchResults = ({
  isSearchResultLoading,
  userInputtedSearch,
  searchResultData,
  shown,
  setShown,
  searchError,
  handleBookmarkInteraction,
}) => {
  const isNoSearchResult = searchResultData.length === 0;
  const displayedResults = searchResultData.slice(0, shown);

  if (!userInputtedSearch && isNoSearchResult) {
    return;
  }

  // loading
  if (isSearchResultLoading) {
    return (
      <section className="results">
        <div className="results__content">
          <Preloader />
          <p className="result__searching">Searching for news...</p>
        </div>
      </section>
    );
  }

  if (searchError) {
    return (
      <section className="results">
        <div className="results__content">
          <SearchError />
        </div>
      </section>
    );
  }

  // results
  return (
    <section className="results">
      <div className="results__content">
        {isNoSearchResult ? (
          <NothingFound />
        ) : (
          <>
            <h2 className="results__header">Search results</h2>
            <NewsCardList
              displayedResults={displayedResults}
              handleBookmarkInteraction={handleBookmarkInteraction}
              cardType="bookmark"
            />
            {shown < searchResultData.length && (
              <button
                className="results__more"
                onClick={() => setShown((curr) => curr + 3)}
              >
                show more
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
