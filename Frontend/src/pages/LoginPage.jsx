import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import LoginForm from "../components/LoginForm.jsx";

const LoginPage = () => {
  return (
    <div className="login-page">
      <Header />
      <LoginForm title="Страница авторизации" status="LogIn" />
      <Footer />
    </div>
  );
};

export default LoginPage;
