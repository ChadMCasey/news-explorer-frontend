// external
import { useState } from "react";
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

// context
import { IsLoggedInContext } from "../../context/IsLoggedInContext";
import { ModalStateContext } from "../../context/ModalStateContext";

// constants
import { placeholderCards } from "../../utils/constants";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInputtedSearch, setUserInputtedSearch] = useState("");
  const [isSearchResultLoading, setIsSearchResultLoading] = useState(false);
  const [searchResultData, setSearchResultData] = useState({});
  const [activeModal, setActiveModal] = useState("");

  function handleUserSearch(topic) {
    setUserInputtedSearch(topic);
    setIsSearchResultLoading(true);
    setSearchResultData({ data: "dummy data" });
    setTimeout(() => setIsSearchResultLoading(false), 1000);
  }

  return (
    <div className="page">
      <IsLoggedInContext.Provider value={isLoggedIn}>
        <ModalStateContext.Provider value={{ activeModal, setActiveModal }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header>
                    <Hero handleUserSearch={handleUserSearch} />
                    <ModalWithForm />
                  </Header>
                  <Main>
                    <SearchResults
                      isSearchResultLoading={isSearchResultLoading}
                      searchResultData={searchResultData}
                      userInputtedSearch={userInputtedSearch}
                    />
                    <About />
                  </Main>
                </>
              }
            />
            <Route path="/saved-news" element={<SavedNews />} />
          </Routes>
          <Footer />
        </ModalStateContext.Provider>
      </IsLoggedInContext.Provider>
    </div>
  );
}

export default App;
