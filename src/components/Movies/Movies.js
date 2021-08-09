import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesApi from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";
import { useLocation } from "react-router-dom";


import {
  screenCoefficient,
  screenSizeDefinition,
} from "../../utils/ScreenDefinition";

function Movies({loggedIn}) {
  const { pathname } = useLocation();
  const [movies, setMoviesList] = useState([]); //
  const [renderedFilms, setRenderedFilms] = useState([]);
  const [countClickMoreFilms, setCountClickMoreFilms] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [visibilityMoviesList, setVisibilityMoviesList] = useState("");
  const [isPreloaderOpen, setIsPreloaderOpen] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const [visibilityBtnYet, setVisibilityBtnYet] = useState(
    "movies__button_hidden"
  );
  const [isShortFilms, setIsShortFilms] = useState(false);
  
  useEffect(() => {
    MainApi.getSavedMovies()
      .then((savedMoviesData) => {
        if (savedMoviesData) {
          setSavedMovies(savedMoviesData);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    if (pathname === "/saved-movies") {
      setVisibilityMoviesList("movies_visibility");
    }
  }, []);

  function shortMoviesHandle() {
    return movies.filter((movie) => movie.duration <= 40);
  }

  function filterMovies(films) {
    if (isShortFilms) {
      return shortMoviesHandle(films);
    }
    return films.filter((movie) => movie.duration >= 40);
  }

  const filteredMovies = React.useMemo(() => filterMovies(movies), [
    isShortFilms,
    movies,
  ]);
  const filteredRenderedMovies = React.useMemo(
    () => filterMovies(renderedFilms),
    [isShortFilms, renderedFilms]
  );
  const filteredSavedMovies = React.useMemo(() => filterMovies(savedMovies), [
    isShortFilms,
    savedMovies,
  ]);

  function countInitCards() {
    const width = screenSizeDefinition();
    if (width >= 1280) {
      return 12;
    }
    if (width >= 757) {
      return 8;
    }
    return 5;
  }

  function handleMoreRenderFilms() {
    const cards = countInitCards();

    setRenderedFilms(
      filteredMovies.slice(0, cards + countClickMoreFilms * screenCoefficient())
    );
    setCountClickMoreFilms(countClickMoreFilms + 1);
  }

  function filterMoviesFromLS(moviesList) {
    const films = moviesList.filter((movie) =>
      movie.nameRU.includes(searchValue)
    );

    setMoviesList(() => {
      localStorage.setItem("foundFilms", JSON.stringify(films));
      return films;
    });
  }

  function handleSearch(evt) {
    evt.preventDefault();
    if (searchValue === "") {
      setInputError("Нужно ввести ключевое слово");
      return;
    }
    setIsPreloaderOpen("preloader_active");
    setVisibilityMoviesList("");
    if (pathname === "/movies") {
      if (!localStorage.getItem("moviesList")) {
        MoviesApi.getMovies()
          .then((moviesList) => {
            localStorage.setItem("moviesList", JSON.stringify(moviesList));
            filterMoviesFromLS(JSON.parse(localStorage.moviesList));
            setIsPreloaderOpen("");
            setVisibilityMoviesList("movies_visibility");
            setVisibilityBtnYet("");
          })
          .catch((err) => console.log(err));
        return;
      }

      filterMoviesFromLS(
        localStorage.getItem("moviesList")
          ? JSON.parse(localStorage.moviesList)
          : []
      );
      setIsPreloaderOpen("");
      setVisibilityMoviesList("movies_visibility");
      setVisibilityBtnYet("");
    } else {
      setSavedMovies(
        savedMovies.filter((movie) => movie.nameRU.includes(searchValue))
      );
      setVisibilityMoviesList("movies_visibility");
      setIsPreloaderOpen("");
    }
  }

  function addMovie(movie) {
    MainApi.addMovie(movie)
      .then((dataMovie) => {
        setSavedMovies([dataMovie.data, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function removeMovie(movieId) {
    MainApi.removeMovie(movieId)
      .then(() => {
        const newMovies = savedMovies.filter((movie) => movie._id !== movieId);
        setSavedMovies(newMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <>
      <Header loggedIn={loggedIn}/>
      <SearchForm
        onSubmit={handleSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        inputError={inputError}
        setInputError={setInputError}
        isShortFilms={isShortFilms}
        setIsShortFilms={setIsShortFilms}
      />
      <Preloader isPreloaderOpen={isPreloaderOpen} />
      <MoviesCardList
        movies={filteredMovies}
        visibilityMoviesList={visibilityMoviesList}
        renderedFilms={filteredRenderedMovies}
        setRenderedFilms={setRenderedFilms}
        handleMoreRenderFilms={handleMoreRenderFilms}
        countInitCards={countInitCards}
        addMovie={addMovie}
        removeMovie={removeMovie}
        savedMovies={filteredSavedMovies}
        setVisibilityMoviesList={setVisibilityMoviesList}
        visibilityBtnYet={visibilityBtnYet}
        setVisibilityBtnYet={setVisibilityBtnYet}
        shortMoviesHandle={shortMoviesHandle}
        isShortFilms={isShortFilms}
      />
      <Footer/>
    </>
  );
}

export default Movies;