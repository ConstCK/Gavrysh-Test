import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import PostPage from "./pages/PostPage.jsx";

function App() {
  return (
    <>
      <nav>
        <NavLink
          to={""}
          className={({ isActive }) => (isActive ? "activeLink" : "link")}
        >
          Home
        </NavLink>
        <NavLink to={"login"}>Login</NavLink>
        <NavLink to={"register"}>Registration</NavLink>
        <NavLink to={"post/:id"}>Post</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login/" element={<LoginPage />} />
        <Route path="register/" element={<RegistrationPage />} />
        <Route path="post/:id" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
