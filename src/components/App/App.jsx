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
import { setToken, getToken, removeToken } from "../../utils/token";
import { fromDate, toDate, formatSearchResultDate } from "../../utils/date.js";

// classes
import NewsAPI from "../../utils/NewsAPI";
import BackendAPI from "../../utils/BackendAPI";

// API's
const newsAPI = new NewsAPI();
const backendAPI = new BackendAPI();

function App() {
  // user
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    _id: "",
  });
  const [userCardData, setUserCardData] = useState([]);
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
    setSearchResultData([]);
    setSearchError(false);
    setUserInputtedSearch(topic);

    newsAPI
      .getNewsData({
        q: topic,
        from: fromDate(),
        to: toDate(),
      })
      .then((res) => {
        saveSearchResults(res.articles, topic);
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
  }

  // homepage
  async function handleBookmarkInteraction(isBookedMarked, card) {
    const { date, image, keyword, link, source, text, title } = card;
    if (isBookedMarked) {
      backendAPI
        .saveArticle(
          {
            date,
            image,
            keyword,
            link,
            source,
            text,
            title,
            owner: userData._id,
          },
          getToken()
        )
        .then((res) => {
          const savedCard = searchResultData.find((c) => c.link === res.link);
          savedCard._id = res._id;
          savedCard.owner = res.owner;
          savedCard.bookmared = true;
          setData("articles", JSON.stringify(searchResultData));
          return true;
        })
        .catch((err) => {
          console.error(`Error saving article: ${err.message}`);
        });
    } else {
      backendAPI
        .unsaveArticle(card._id, getToken())
        .then(() => {
          clearArticleDBinformation();
        })
        .catch((err) => {
          console.error(`Error unsaving article: ${err.message}`);
        });
    }
  }

  // saved articles page
  function removeBookMarkedCard(removeCard) {
    console.log(removeCard._id);
    console.log(userData);
    console.log(userCardData);
    backendAPI
      .unsaveArticle(removeCard._id, getToken())
      .then((res) => {
        console.log(res);
        clearArticleDBinformation(removeCard._id);
        setUserCardData((prevSaved) => {
          return prevSaved.filter((card) => card._id !== removeCard._id);
        });
      })
      .catch((err) => {
        console.error(`Error removing bookmarked card: ${err.status}`);
      });
  }

  function clearArticleDBinformation(id) {
    const savedCard = searchResultData.find((c) => c._id === id);
    if (savedCard) {
      delete savedCard.owner;
      delete savedCard._id;
      savedCard.bookmarked = false;
    }
    setData("articles", JSON.stringify(searchResultData));
  }

  function saveSearchResults(cardsArray, topic) {
    const cards = cardsArray.map((obj) => {
      return {
        keyword: topic,
        image: obj.urlToImage,
        link: obj.url,
        date: formatSearchResultDate(obj.publishedAt),
        title: obj.title,
        text: obj.description,
        source: obj.source.name,
        bookmarked: false,
      };
    });
    setSearchResultData(cards);
    setData("articles", JSON.stringify(cards));
  }

  function closeModal() {
    setActiveModal("");
  }

  function handleSignIn(values, resetFormCallback) {
    backendAPI
      .signIn(values.email, values.password)
      .then((res) => {
        const { name, email, token, _id } = res;
        // first login user
        setUserData({ name, email, _id });
        setToken(token);
        setIsLoggedIn(true);
        resetFormCallback();
        closeModal();
      })
      .catch((err) => {
        err
          .json()
          .then((err) => console.error(`User sign in error: ${err.message}`));
      });
  }

  function fetchUserArticleData() {
    backendAPI.getAllSavedArticles(getToken()).then((res) => {
      setUserCardData(res);
    });
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    setUserInputtedSearch("");
    setUserData({});
    setUserCardData([]);
    setSearchResultData([]);
    removeToken();
    closeModal();
  }

  function handleSignUp(values, resetFormCallback, setEmailUnavailable) {
    backendAPI
      .signUp({
        name: values.username,
        email: values.email,
        password: values.password,
      })
      .then(() => {
        resetFormCallback();
        setActiveModal("registration-complete-modal");
      })
      .catch((error) => {
        error.json().then((error) => {
          console.error(`User registration Error: ${error.message}`);
          if (error.message === "The Provided email is unavaiable.") {
            setEmailUnavailable(true);
          }
        });
      });
  }

  useEffect(() => {
    if (activeModal === "") return;
    const escModalClose = (e) => e.key == "Escape" && closeModal();
    window.addEventListener("keydown", escModalClose);
    return () => window.removeEventListener("keydown", escModalClose);
  }, [activeModal]);

  useEffect(() => {
    let savedArticles = JSON.parse(getData("articles")) || [];
    if (getToken()) {
      savedArticles = savedArticles.map((article) => {
        article._id
          ? (article.bookmarked = true)
          : (article.bookmarked = false);
        return article;
      });
    } else {
      savedArticles = savedArticles.map((article) => {
        article.bookmarked = false;
        return article;
      });
    }

    setSearchResultData(savedArticles);
  }, []);

  useEffect(() => {
    const jwt = getToken();
    if (jwt) {
      backendAPI
        .getUserData(jwt)
        .then((res) => {
          const { name, email, _id } = res;
          setIsLoggedIn(true);
          setUserData({
            name,
            email,
            _id,
          });
        })
        .catch((err) => {
          console.error(`Authentication Error: ${err.message}`);
        });
    }
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
                        <SavedNewsHeader userCardData={userCardData} />
                      </Header>
                      <SavedNews
                        userCardData={userCardData}
                        fetchUserArticleData={fetchUserArticleData}
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
