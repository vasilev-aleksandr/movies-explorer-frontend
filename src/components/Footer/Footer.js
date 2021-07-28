import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__row">
        <p className="footer__date">© 2021</p>
        <ul className="footer__links-container">
          <li><a href="https://praktikum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/vasilev-aleksandr/movies-explorer-frontend" className="footer__link" target="_blank" rel="noreferrer">Github</a></li>
          <li><a href="https://www.facebook.com/alightinthedark" className="footer__link" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;