import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";
import { Route, Switch, useLocation, useHistory } from "react-router";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import MainApi from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";




function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isEditDone, setIsEditDone] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [EditError, setEditError] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();




  function isLoggedInCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.getInfo()
        .then((userInfo) => {
          if (userInfo) {
            setCurrentUser(userInfo);
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    isLoggedInCheck();
  }, []);


  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setLoginError(true);
        console.log(err);
      });
  }

  function handleRegister(email, password, name) {
    MainApi.register(email, password, name)
      .then((data) => {
        if (data) {
          handleLogin(email, password);
          history.push("/signin");
        }
      })
      .catch(() => {
        setRegistrationError(true);
      });
  }

  function editProfile(name, email) {
    MainApi.setInfo(name, email)
      .then((info) => {
        console.log(info);
        setCurrentUser(info);
        setIsEditDone(true);
        setEditError(false);
        setTimeout(() => {
          setIsEditDone(false);
        }, 4000);
      })
      .catch(() => {
        setEditError(true);
      });
  }

  function handleLogout() {
    history.push("/");
    setLoggedIn(false);
    localStorage.clear();
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
        <Route path="/" exact>
          <div className={`page__container ${pathname === '/' && "page__container_blue"}`}>
            <Header loggedIn={loggedIn}/>
          </div>          
          <Main />
          <Footer />
        </Route>
        {loggedIn && (
          <ProtectedRoute
            path="/movies"
            exact
            component={Movies}
            loggedIn={loggedIn}
            currentUser={currentUser}
          />
        )}
        {loggedIn && (
          <ProtectedRoute
            path="/saved-movies"
            exact
            component={Movies}
            loggedIn={loggedIn}
            currentUser={currentUser}
            />
          )}
        {loggedIn && (
          <ProtectedRoute
            path="/profile"
            exact
            component={Profile}
            handleLogout={handleLogout}
            editProfile={editProfile}
            loggedIn={loggedIn}
            currentUser={currentUser}
            EditError={EditError}
            isEditDone={isEditDone}
            />
          )}
          <Route path="/signin" exact>
            <Login handleLogin={handleLogin} loginError={loginError} />
          </Route>
          <Route path="/signup" exact>
            <Register
              handleRegister={handleRegister}
              registrationError={registrationError}
            />
          </Route>
          {loggedIn && (
            <Route path="*">
              <Error/>
            </Route>
          )}
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
