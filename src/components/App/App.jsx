// external
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// css
import "./App.css";

// components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import Hero from "../Hero/Hero";
import SavedNews from "../SavedNews/SavedNews";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";
import RegistrationCompleteModal from "../RegistrationCompleteModal/RegistrationCompleteModal";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import EmptySearchModal from "../EmptySearchModal/EmptySearchModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// context
import { IsLoggedInContext } from "../../context/IsLoggedInContext";
import { ModalStateContext } from "../../context/ModalStateContext";
import { UserDataContext } from "../../context/UserDataContext";

// constants & utils
import { getData, setData } from "../../utils/localStorage";
import { fromDate, toDate, formatSearchResultDate } from "../../utils/date.js";

// classes
import NewsAPI from "../../utils/NewsAPI";

// API's
const newsAPI = new NewsAPI();

function App() {
  // user
  const [userData, setUserData] = useState({});
  const [userCardData, setUserCardData] = useState([
    {
      id: 121431342342,
      articleUrl:
        "https://www.wired.com/story/ftx-creditors-crypto-payout-rejection/",
      imgUrl: "https://www.sciencedaily.com/images/scidaily-icon.png",
      publishedAt: "May 9, 2024",
      title: "Study shows heightened sensitivity to PTSD in autism",
      description:
        "A new study shows that a mild stress is enough to …al relationship, identifying a predisposition to…",
      source: "Science Daily",
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // search result
  const [userInputtedSearch, setUserInputtedSearch] = useState("");
  const [isSearchResultLoading, setIsSearchResultLoading] = useState(false);
  const [searchResultData, setSearchResultData] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [shown, setShown] = useState(3);

  // modal
  const [activeModal, setActiveModal] = useState("");

  function handleUserSearch(topic, resetForm) {
    setIsSearchResultLoading(true);
    setUserInputtedSearch(topic);

    newsAPI
      .getNewsData({
        q: topic,
        from: fromDate(),
        to: toDate(),
      })
      .then((res) => {
        saveSearchResults(res.articles);
        setSearchError(false);
        resetForm();
      })
      .catch((err) => {
        console.error(`Error fetching news data: Status ${err.status}`);
        setSearchError(true);
      })
      .finally(() => {
        setShown(3);
        setIsSearchResultLoading(false);
      });

    setTimeout(() => setIsSearchResultLoading(false), 1000);
  }

  function handleBookmarkInteraction(isBookedMarked, card) {
    console.log(isBookedMarked, card);
    if (isBookedMarked) {
      // API call to /articles & save the card.
      // update user card data to reflect these changes
    } else {
      // API call to /articles & unsave the card.
      // update user card data to reflect these changes
    }
  }

  function removeBookMarkedCard(removeCard) {
    console.log(removeCard.id); // API call to /articles & unsave the card.
    setUserCardData((prevSaved) => {
      return prevSaved.filter((card) => card.id !== removeCard.id);
    });
  }

  function saveSearchResults(cardsArray) {
    const cards = cardsArray.map((obj) => {
      return {
        imgUrl: obj.urlToImage,
        articleUrl: obj.url,
        publishedAt: formatSearchResultDate(obj.publishedAt),
        title: obj.title,
        description: obj.description,
        source: obj.source.name,
      };
    });
    console.log(cards);
    setSearchResultData(cards);
    setData("articles", JSON.stringify(cards));
  }

  function closeModal() {
    setActiveModal("");
  }

  function handleSignIn(values, resetFormCallback) {
    setUserData(values);
    // setUserCardData; // get data from database
    setIsLoggedIn(true);
    resetFormCallback();
    closeModal();
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    setUserInputtedSearch("");
    setUserData({});
    setUserCardData([]);
    setSearchResultData([]);
  }

  function handleSignUp(values, resetFormCallback) {
    // setEmailUnavailable(false); return;
    resetFormCallback();
    setActiveModal("registration-complete-modal");
  }

  // modal escape close evt
  useEffect(() => {
    if (activeModal === "") return;
    const escModalClose = (e) => e.key == "Escape" && closeModal();
    window.addEventListener("keydown", escModalClose);
    return () => window.removeEventListener("keydown", escModalClose);
  }, [activeModal]);

  // load previous search results
  useEffect(() => {
    const savedArticles = JSON.parse(getData("articles")) || [];
    setSearchResultData(savedArticles);
  }, []);

  return (
    <div className="page">
      <UserDataContext.Provider value={userData}>
        <IsLoggedInContext.Provider value={{ isLoggedIn, handleSignOut }}>
          <ModalStateContext.Provider
            value={{ activeModal, setActiveModal, closeModal }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header>
                      <Hero handleUserSearch={handleUserSearch} />
                    </Header>
                    <Main>
                      <SearchResults
                        isSearchResultLoading={isSearchResultLoading}
                        searchResultData={searchResultData}
                        userInputtedSearch={userInputtedSearch}
                        searchError={searchError}
                        shown={shown}
                        setShown={setShown}
                        handleBookmarkInteraction={handleBookmarkInteraction}
                      />
                      <About />
                    </Main>
                  </>
                }
              />
              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute>
                    <div className="saved-news-page">
                      <Header>
                        <SavedNewsHeader />
                      </Header>
                      <SavedNews
                        userCardData={userCardData}
                        removeBookMarkedCard={removeBookMarkedCard}
                      />
                    </div>
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />

            <SigninModal handleSignIn={handleSignIn} />
            <SignupModal handleSignUp={handleSignUp} />
            <RegistrationCompleteModal />
            <HamburgerMenu />
            <EmptySearchModal />
          </ModalStateContext.Provider>
        </IsLoggedInContext.Provider>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;
