import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/AuthBar.scss";
import store from "../store/store.js";
import { LOG_IN } from "../store/actions.js";
import { LOG_OUT } from "../store/actions.js";
import MyButton from "./UI/MyButton.jsx";
import BurgerMenu from "./BurgerMenu.jsx";

const AuthBar = () => {
  const navigate = useNavigate();
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

  const handleLogOut = () => {
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    setUser(localStorage.getItem("user"));
    store.dispatch(LOG_OUT);
    setIsAuth(store.getState().isAuth);
  };

  const handleLogIn = () => {
    navigate("/login/");
  };

  const handleRegistration = () => {
    navigate("register/");
  };

  return (
    <>
      <div className="auth">
        {isAuth && <div className="user">{user}</div>}
        {
          <div className="auth-bar">
            {isAuth ? (
              <MyButton title="Выйти" handler={handleLogOut} />
            ) : (
              <div>
                <MyButton title="Войти" handler={handleLogIn} />
                <MyButton title="Регистрация" handler={handleRegistration} />
              </div>
            )}
          </div>
        }
      </div>
      <BurgerMenu />
    </>
  );
};

export default AuthBar;
