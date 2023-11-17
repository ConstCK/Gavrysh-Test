import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/AuthBar.scss";
import store from "../store/store.js";
import MyButton from "./UI/MyButton.jsx";
import BurgerMenu from "./BurgerMenu.jsx";
import { LOG_OUT } from "../store/actions.js";

const AuthBar = () => {
  const navigate = useNavigate();
  const navigation = useLocation();
  const [isAuth, setIsAuth] = useState(store.getState().isAuth);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [currentLocation, setCurrentLocation] = useState(navigation.pathname);

  const handleLogOut = () => {
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    setUser(localStorage.getItem("user"));
    store.dispatch(LOG_OUT);
    setIsAuth(store.getState().isAuth);
  };

  const handleLogIn = () => {
    navigate("login/");
  };

  const handleRegistration = () => {
    navigate("register/");
  };

  return (
    <>
      {isAuth && <div className="user">{user}</div>}
      {currentLocation == "/" && (
        <div className="auth-bar">
          {isAuth ? (
            <MyButton title="Выйти" eventHandler={handleLogOut} />
          ) : (
            <div>
              <MyButton title="Войти" eventHandler={handleLogIn} />
              <MyButton
                title="Зарегистрироваться"
                eventHandler={handleRegistration}
              />
            </div>
          )}
        </div>
      )}
      <BurgerMenu />
    </>
  );
};

export default AuthBar;
