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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState({});

  return (
    <div className="page">
      <IsLoggedInContext.Provider value={isLoggedIn}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header>
                  <Hero />
                </Header>
                <Main>
                  <SearchResults />
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
