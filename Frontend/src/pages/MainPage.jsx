import React, { useEffect, useState } from "react";
import "../styles/MainPage.scss";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SideBar from "../components/SideBar.jsx";
import ContentBar from "../components/ContentBar.jsx";

import store from "../store/store.js";

function MainPage() {
  return (
    <div>
      <Header />
      <main className="main">
        <SideBar />
        <ContentBar />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
