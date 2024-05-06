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

// constants
import { placeholderCards } from "../../utils/constants";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchResultLoading, setIsSearchResultLoading] = useState(false);
  const [userInputtedSearch, setUserInputtedSearch] = useState("");
  const [userData, setUserData] = useState({});

  function handleUserSearch(topic) {
    setUserInputtedSearch(topic);
    setIsSearchResultLoading(true);
    setTimeout(() => setIsSearchResultLoading(false), 1000);
  }

  return (
    <div className="page">
      <IsLoggedInContext.Provider value={isLoggedIn}>
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
      </IsLoggedInContext.Provider>
    </div>
  );
}

export default App;
