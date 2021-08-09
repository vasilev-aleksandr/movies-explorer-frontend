import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import headerIcon from "../../images/header-icon.svg";
import CallbackValidation from "../../validation/CallbackValidation";


function Register({ handleRegister, registrationError }) {
  const formCallbackValidation = CallbackValidation();
  const { email, password, name } = formCallbackValidation.values;
  const {
    values,
    onFocus,
    handleChange,
    isFocused,
    errors,
  } = formCallbackValidation;

  const submitHandle = (event) => {
    event.preventDefault();
    handleRegister(email, password, name);
    formCallbackValidation.resetForm();
  };

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <img className="register__logo" src={headerIcon} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <Form
          submitText={{
            buttonText: "Зарегистрироваться",
            prompt: "Уже зарегистрированы?",
            route: "/signin",
            linkText: "Войти",
          }}
          registrationError={registrationError}
          submitHandle={submitHandle}
          validation={formCallbackValidation}
          formName="register"
        >
          <label htmlFor="name" className="form__label">
            Имя
          </label>
          <input
            required
            id="name"
            name="name"
            className={`form__input ${errors.name && "form__input-error"}`}
            minLength="2"
            type="text"
            value={values.name || ""}
            onFocus={onFocus}
            onChange={handleChange}
          />
        <span className="form__input-error">{isFocused && errors.name}    </span>
        </Form>
      </div>
    </section>
  );
}

export default Register;