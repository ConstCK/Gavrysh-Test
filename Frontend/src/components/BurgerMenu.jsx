import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/BurgerMenu.scss";
import store from "../store/store.js";
import { LOG_IN } from "../store/actions.js";
import { LOG_OUT } from "../store/actions.js";
import MyButton from "./UI/MyButton.jsx";

const BurgerMenu = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [isAuth, setIsAuth] = useState(store.getState().isAuth);
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (user.length > 0) {
      store.dispatch(LOG_IN);
      setIsAuth(store.getState().isAuth);
    } else {
      store.dispatch(LOG_OUT);
      setIsAuth(store.getState().isAuth);
    }
  }, []);

  const handleBurgerMenu = () => {
    setMenuStatus(!menuStatus);
  };
  const handleLogOut = () => {
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    setUser(localStorage.getItem("user"));
    store.dispatch(LOG_OUT);
    setIsAuth(store.getState().isAuth);
  };
  return (
    <>
      <div className="burger-menu">
        {isAuth && <div className="user">{user}</div>}
        <div
          className={!menuStatus ? "burger closed" : "burger opened"}
          onClick={handleBurgerMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="mobile-menu"></div>
      </div>
      <div className={menuStatus ? "menu-visible" : "menu-invisible"}>
        <nav className="nav">
          <Link to={"/"}>Главная</Link>
          <Link to={"post-create/"} disabled={isAuth ? false : true}>
            Создать пост
          </Link>
          <Link to={"/about/"}>О сайте</Link>
        </nav>

        {isAuth ? (
          // <MyButton title="Выйти" eventHandler={handleLogOut} />
          <div className="nav-item" onClick={handleLogOut}>
            Выйти
          </div>
        ) : (
          <nav className="nav">
            <Link to={"/login/"}>Войти</Link>
            <Link to={"/register/"}>Регистрация</Link>
          </nav>
        )}
      </div>
    </>
  );
};

export default BurgerMenu;
