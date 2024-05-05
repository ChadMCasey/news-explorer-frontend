import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";

const Header = ({ children }) => {
  return (
    <header className="header">
      <Navigation />
      {children}
    </header>
  );
};

export default Header;
