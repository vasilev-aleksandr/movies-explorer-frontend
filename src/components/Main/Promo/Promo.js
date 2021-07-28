import "./Promo.css";
import React from "react";
import imgPromo from "../../../images/promo-logo.svg";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__description">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={imgPromo} alt="практикум-лого" className="promo__image"/>
      </div>
      <nav className="promo__navigation">
        <ul className="promo__navigation-list">
          <li> <a href ="/#aboutProject-anchor" className="promo__link"> О проекте</a> </li>
          <li> <a href ="/#tech-anchor" className="promo__link">Технологии</a> </li>   
          <li> <a href ="/#aboutMe-anchor" className="promo__link">Студент</a> </li>
        </ul>
      </nav>
    </div>
  );
}

export default Promo;