// external
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
import ModalWithForm from "../ModalWithForm/ModalWithForm";
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
import { placeholderCards } from "../../utils/constants";
import { fromDate, toDate } from "../../utils/date.js";
import { getData, setData } from "../../utils/localStorage";

// classes
import NewsAPI from "../../utils/NewsAPI";

// API's
const newsAPI = new NewsAPI();

function App() {
  // login state
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // search result states
  const [userInputtedSearch, setUserInputtedSearch] = useState("");
  const [isSearchResultLoading, setIsSearchResultLoading] = useState(false);
  const [searchResultData, setSearchResultData] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [shown, setShown] = useState(3);

  // modal state
  const [activeModal, setActiveModal] = useState("");

  function handleUserSearch(topic, resetForm) {
    setSearchResultData(placeholderCards);
    setData("articles", JSON.stringify(placeholderCards));

    setIsSearchResultLoading(true);
    setUserInputtedSearch(topic);
    setShown(3);

    // newsAPI
    //   .getNewsData({
    //     q: topic,
    //     from: fromDate(),
    //     to: toDate(),
    //   })

    //   .then((res) => {
    //     console.log(res);
    //     setSearchResultData(res.articles);
    //     setData("articles", res.articles)

    //   })
    //   .catch((err) => {
    //     console.error(`Error fetching news data: Status ${err.status}`);
    //   })

    //   .finally(() => {
    //     resetForm();
    //   });

    setTimeout(() => setIsSearchResultLoading(false), 1000);
  }

  function closeModal() {
    setActiveModal("");
  }

  function handleSignIn(values, resetFormCallback) {
    setUserData(values);
    setIsLoggedIn(true);
    resetFormCallback();
    closeModal();
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    setUserInputtedSearch("");
    setUserData({});
    setSearchResultData([]);
  }

  function handleSignUp(values, resetFormCallback, setEmailUnavailable) {
    // setEmailUnavailable(false); return;
    resetFormCallback();
    setActiveModal("registration-complete-modal");
  }

  useEffect(() => {
    if (activeModal === "") return;
    const escModalClose = (e) => e.key == "Escape" && closeModal();
    window.addEventListener("keydown", escModalClose);
    return () => window.removeEventListener("keydown", escModalClose);
  }, [activeModal]);

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
                      <SavedNews placeholderCards={placeholderCards} />
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
