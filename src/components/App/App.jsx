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

// context
import { IsLoggedInContext } from "../../context/IsLoggedInContext";
import { ModalStateContext } from "../../context/ModalStateContext";
import { UserDataContext } from "../../context/UserDataContext";

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
    setUserData(values);
    setIsLoggedIn(true);
    resetFormCallback();
    closeModal();
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    setUserData({});
    console.log("user logged out");
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
            <HamburgerMenu />
          </ModalStateContext.Provider>
        </IsLoggedInContext.Provider>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;
