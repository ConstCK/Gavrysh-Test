import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import PostCreationPage from "./pages/PostCreationPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/register/" element={<RegistrationPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/post-create/" element={<PostCreationPage />} />
        <Route path="/about/" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
