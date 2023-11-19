import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.scss";
import store from "../store/store.js";
import HomeImg from "../assets/images/home.svg";
import MyButton from "./UI/MyButton.jsx";

const NavBar = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(store.getState().isAuth);

  store.subscribe(() => {
    setIsAuth(store.getState().isAuth);
  });
  const createPost = () => {
    navigate("/post-create/");
  };
  const about = () => {
    navigate("/about/");
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="nav-bar">
      <div className="home-btn">
        <img
          className="home-img"
          src={HomeImg}
          alt="home"
          onClick={handleHome}
        />
      </div>
      <MyButton
        title="Создать пост"
        eventHandler={createPost}
        disabled={isAuth ? false : true}
      />
      <MyButton title="О сайте" eventHandler={about} />
    </div>
  );
};

export default NavBar;
