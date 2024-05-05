import React from "react";
import "./Hero.css";
import SearchForm from "../SearchForm/SearchForm";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__heading">What's going on in the world?</h1>
      <p className="hero__subheading">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm />
    </div>
  );
};

export default Hero;
