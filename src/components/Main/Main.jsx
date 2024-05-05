import React from "react";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";
import Header from "../Header/Header";

const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
