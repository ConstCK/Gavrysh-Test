import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage.jsx";

function App() {
  return (
    <>
      <nav>
        <Link to={""}>Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
