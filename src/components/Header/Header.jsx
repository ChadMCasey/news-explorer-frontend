import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <Hero />
    </header>
  );
};

export default Header;
