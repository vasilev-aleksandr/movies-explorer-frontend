
import React from 'react';
import './AboutMe.css';
import myPhoto from '../../../images/avatar.jpeg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me" id="aboutMe-anchor">
      <h1 className="about-me__title">Студент</h1>
      <div className="about-me__bio-wrapper">
        <div className="about-me__bio-information">
          <div className="about-me__bio-information-container">
            <h2 className="about-me__bio-title">Александр</h2>
            <p className="about-me__bio-subtitle">Фронтенд-разработчик, 31 год</p>
            <p className="about-me__bio-text">
              Я родился в городе Орле и закончил там финасово-экономический факультет Орловского 
              Государственного универститета. Последние 10 лет я живу в Санкт-Петербурге и работаю 
              в сфере импортных закупок. Я люблю велоспорт, виниловые пластинки и путешествия по США. 
              Совсем недавно завел щенка и просто без ума от него!
              В прошлом году начал интересоваться фронтенд разработкой благодаря своим близким друзьям, 
              которым удалось сменить свои скучные профессии и достигнуть определенных успехов.
              На данный момент я закончил обучение на факультете Веб-разработки Яндекс-Практикума и 
              нахожусь в поисках первого места работы по новой специальности.
            </p>
          </div>
          <div className="about-me__links-container">
            <a
              href="https://www.facebook.com/alightinthedark"
              className="about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://github.com/vasilev-aleksandr"
              className="about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <img src={myPhoto} alt="me" className="about-me__photo" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;