import React from "react";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

const Main = () => {
  return (
    <main className="main">
      <SearchResults />
      <About />
    </main>
  );
};

export default Main;
