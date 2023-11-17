import React from "react";
import "../styles/Header.scss";
import NavBar from "./NavBar.jsx";
import AuthBar from "./AuthBar.jsx";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <AuthBar />
    </header>
  );
};

export default Header;
