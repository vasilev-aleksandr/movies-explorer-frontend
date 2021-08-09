import React, { useState, useEffect} from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import likeIcon from "../../../images/like.svg"
import likeIconActive from "../../../images/like-red.svg"
import deleteIcon from "../../../images/cross.svg"
import CurrentUserContext from "../../../contexts/CurrentUserContext"

function MoviesCard({
  movie,
  cardName,
  cardDuration,
  imageLink,
  trailerLink,
  addMovie,
  removeMovie,
  savedMovies,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isAddedCard, setIsAddedCard] = useState(false);

  const { pathname } = useLocation();
  const moviesIcon = isAddedCard ? likeIconActive : likeIcon;
  const cardIcon = pathname === "/movies" ? moviesIcon : deleteIcon;

  function handleLikeMovie() {
    if (!isAddedCard) {
      addMovie(movie);
      setIsAddedCard(true);
      console.log()
    } else {
      const movieItem = savedMovies.filter(
        (savedMovie) => savedMovie.movieId === movie.id
      );
      removeMovie(movieItem[0].data._id);
      setIsAddedCard(false);
    }
  }

  function handleDeleteButton() {
    removeMovie(movie._id);
  }

  useEffect(() => {
    if (savedMovies.length > 0) {
      if (!isAddedCard) {
        setIsAddedCard(
          savedMovies.some(
            (savedMovie) =>
              savedMovie.movieId === movie.id &&
              savedMovie.owner === currentUser._id
          )
        );
      } else {
        setIsAddedCard(false);
      }
    }
  }, []);


  const functionIcon =
    pathname === "/movies" ? handleLikeMovie : handleDeleteButton;

  return (
    <li className="card">
      <div className="card__wrap">
        <a
          className="card__trailer-link"
          href={trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img className="card__image" src={imageLink} alt={cardName} />
        </a>
      </div>
      <div className="card__description">
        <p className="card__name">{cardName}</p>
        <p className="card__duration">{cardDuration}</p>
        <img
          className="card__icon"
          src={cardIcon}
          alt="icon"
          onClick={functionIcon}
        />
      </div>
    </li>
  );
}

export default MoviesCard;