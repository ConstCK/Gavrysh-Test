import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import LoginForm from "../components/LoginForm.jsx";

const RegistrationPage = () => {
  return (
    <div className="auth-page">
      <Header />
      <LoginForm title="Страница регистрации" status="Register" />
      <Footer />
    </div>
  );
};

export default RegistrationPage;
