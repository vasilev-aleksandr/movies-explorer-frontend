import React from "react";
import {Link} from 'react-router-dom';
import "./Error.css";

function Error() {
  return (
    <div className="error">
      <div className="error__container">
        <p className="error__status">404</p>
        <p className="error__message">Страница не найдена</p>
      </div>
      <Link to="/"  className="error__back">Назад</Link>
    </div>
  );
}

export default Error;