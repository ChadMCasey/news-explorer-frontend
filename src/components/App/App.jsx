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

// context
import { IsLoggedInContext } from "../../context/IsLoggedInContext";
import { ModalStateContext } from "../../context/ModalStateContext";

// constants
import { placeholderCards } from "../../utils/constants";

function App() {
  // login state
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // search result states
  const [userInputtedSearch, setUserInputtedSearch] = useState("");
  const [isSearchResultLoading, setIsSearchResultLoading] = useState(false);
  const [searchResultData, setSearchResultData] = useState([]);
  const [showMore, setShowMore] = useState(false);

  // modal state
  const [activeModal, setActiveModal] = useState("");

  function handleUserSearch(topic) {
    setUserInputtedSearch(topic);
    setIsSearchResultLoading(true);
    setSearchResultData(placeholderCards);
    setTimeout(() => setIsSearchResultLoading(false), 1000);
  }

  function closeModal() {
    setActiveModal("");
  }

  function handleSignIn(values, resetFormCallback) {
    console.log(values);
    resetFormCallback();
    closeModal();
  }

  function handleSignUp(values, resetFormCallback, setEmailUnavailable) {
    console.log(values);

    // setEmailUnavailable(false); // changes state value to notify user that email is unavailable.
    // setEmailUnavailable(true); // remove email unavailable error upon successful registration.

    resetFormCallback();
    setActiveModal("registration-complete-modal"); // user registers successfully
  }

  useEffect(() => {
    if (activeModal === "") return;
    const escModalClose = (e) => e.key == "Escape" && closeModal();
    window.addEventListener("keydown", escModalClose);
    return () => window.removeEventListener("keydown", escModalClose);
  }, [activeModal]);

  return (
    <div className="page">
      <IsLoggedInContext.Provider value={isLoggedIn}>
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
                      setShowMore={setShowMore}
                      showMore={showMore}
                    />
                    <About />
                  </Main>
                </>
              }
            />
            <Route path="/saved-news" element={<SavedNews />} />
          </Routes>
          <Footer />

          <SigninModal handleSignIn={handleSignIn} />
          <SignupModal handleSignUp={handleSignUp} />
          <RegistrationCompleteModal />
        </ModalStateContext.Provider>
      </IsLoggedInContext.Provider>
    </div>
  );
}

export default App;
