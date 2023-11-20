import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.scss";
import store from "../store/store.js";
import { LOG_IN } from "../store/actions.js";
import { authValidation } from "../utils/validationService.js";
import { login, register } from "../api/dataService.js";
import MyInput from "./UI/MyInput.jsx";
import MyButton from "./UI/MyButton.jsx";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [currentLogin, setCurrentLogin] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formStatus, setFormStatus] = useState(null);
  useEffect(() => {
    setFormStatus(props.status);
  }, []);
  const handleLogIn = () => {
    login(currentLogin, currentPassword)
      .then((response) => {
        localStorage.setItem("user", currentLogin);
        localStorage.setItem("token", response.data.token);
        store.dispatch(LOG_IN);
        navigate("/");
      })
      .catch(() => {
        console.log("Ошибка входа");
        setErrorMessage("Ошибка входа");
      });
  };

  const handleRegistration = () => {
    register(currentLogin, currentPassword)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", response.data.user);
        localStorage.setItem("token", response.data.token);
        store.dispatch(LOG_IN);
        navigate("/");
      })
      .catch(() => {
        console.log("Ошибка регистрации");
        setErrorMessage("Ошибка регистрации");
      });
  };
  return (
    <div className="login-form">
      <header className="page-header">{props.title}</header>
      <div className="message">{errorMessage}</div>
      <MyInput
        label="Логин"
        placeholder="Введите логин..."
        handler={setCurrentLogin}
      />
      <MyInput
        label="Пароль"
        placeholder="Введите пароль..."
        handler={setCurrentPassword}
      />
      <MyButton
        title="Отправить"
        disabled={authValidation(currentLogin, currentPassword) ? false : true}
        handler={formStatus === "LogIn" ? handleLogIn : handleRegistration}
      />
    </div>
  );
};

export default LoginForm;
