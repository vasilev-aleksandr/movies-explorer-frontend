import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies({movies}) {
  return (
    <section className="movies">
      <SearchForm/>
      <MoviesCardList movies={movies}/>
      {movies.length>7 && <button className="movies__more">Ещё</button>}
    </section>
  );
}

export default Movies;