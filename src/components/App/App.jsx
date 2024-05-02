// external
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// css
import "./App.css";

// components
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
    </div>
  );
}

export default App;
