import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import headerIcon from "../../images/header-icon.svg";

function Login() {
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
        />
      </div>
    </section>
  );
}

export default Login;