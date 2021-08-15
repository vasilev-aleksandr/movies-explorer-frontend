import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import CallbackValidation from "../../validation/CallbackValidation";
import headerIcon from "../../images/header-icon.svg";

function Login( {handleLogin, loginError }) {
  const formCallbackValidation = CallbackValidation();
  const { email, password } = formCallbackValidation.values;

  const submitHandle = (event) => {
    event.preventDefault();
    handleLogin(email, password);
    formCallbackValidation.resetForm();
  };



  return (
    <section className="login">
      <div className="login__container">
        <Link className="login__link" to="/">
          <img className="login__logo" src={headerIcon} alt="Логотип" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <Form
          submitText={{
            buttonText: "Войти",
            prompt: "Ещё не зарегистрированы?",
            route: "/signup",
            linkText: "Регистрация",
          }}
          submitHandle={submitHandle}
          validation={formCallbackValidation}
          formName="login"
          loginError={loginError}
        />
      </div>
    </section>
  );
}

export default Login;