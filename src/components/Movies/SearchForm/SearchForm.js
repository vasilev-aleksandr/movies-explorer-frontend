import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";

function SearchForm({
  onSubmit,
  searchValue,
  setSearchValue,
  inputError,
  setInputError,
  isShortFilms,
  setIsShortFilms,
}) {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={onSubmit}>
          <div className="search__wrap">
            <input
              placeholder="Фильм"
              className="search__input"
              value={searchValue}
              onChange={(evt) => {
                setSearchValue(evt.target.value);
              }}
              onClick={() => setInputError("")}
            />
            <button type="submit" className="search__submit">Поиск</button>
          </div>
          <span className="search__input-error">{inputError}</span>
          <FilterCheckbox
            filterText="Короткометражки"
            isShortFilms={isShortFilms}
            setIsShortFilms={setIsShortFilms}
          />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;