import movie1 from "../images/33words.png"
import movie2 from "../images/100years.png";
import movie3 from "../images/banksy.png";
import movie4 from "../images/baskiya.png";
import movie5 from "../images/running.png";
import movie6 from "../images/booksellers.png";
import movie7 from "../images/germany.png";


export const propsAuthLogIn = {
  inputsList: [
    { name: "email", label: "E-mail", type: "text" },
    { name: "password", label: "Пароль", type: "password" },
  ],
  title: "Рады видеть!",
  name: "login",
  submitText: "Войти",
  footerData: {
    description: "Ещё не зарегистрированы?",
    linkTo: "/signup",
    linkText: "Регистрация",
  }
};

export const propsAuthRegister = {
  inputsList: [
    { name: "name", label: "Имя", type: "text" },
    { name: "email", label: "E-mail", type: "text" },
    { name: "password", label: "Пароль", type: "password" },
  ],
  title: "Добро пожаловать!",
  name: "register",
  submitText: "Зарегистрироваться",
  footerData: {
    description: "Уже зарегистрированы?",
    linkTo: "/signin",
    linkText: "Войти",
  }
};

export const propsProfile = {
  inputsList: [
    { name: "name", label: "Имя", type: "text", value: "Александр" },
    { name: "email", label: "Почта", type: "text", value: "pochta@yandex.ru" },
  ],
};



export const movies = [
  {
    id: 1,
    nameRU: "33 слова о дизайне",
    duration: 102,
    image: {
      url: movie1,
    },
    saved: false,
  },
  {
    id: 2,
    nameRU: "Киноальманах «100 лет дизайна»",
    duration: 102,
    image: {
      url: movie2,
    },
    saved: false,
  },
  {
    id: 3,
    nameRU: "В погоне за Бенкси",
    duration: 102,
    image: {
      url: movie3,
    },
    saved: true,
  },
  {
    id: 4,
    nameRU: "Баския: Взрыв реальности",
    duration: 102,
    image: {
      url: movie4,
    },
    saved: true,
  },
  {
    id: 5,
    nameRU: "Бег это свобода",
    duration: 102,
    image: {
      url: movie5,
    },
    saved: true,
  },
  {
    id: 6,
    nameRU: "Книготорговцы",
    duration: 102,
    image: {
      url: movie6,
    },
    saved: true,
  },
  {
    id: 7,
    nameRU: "Когда я думаю о Германии ночью",
    duration: 102,
    image: {
      url: movie7,
    },
    saved: true,
  },
  {
    id: 8,
    nameRU: "Когда я думаю о Германии ночью",
    duration: 102,
    image: {
      url: movie7,
    },
    saved: true,
  },
  {
    id: 9,
    nameRU: "Когда я думаю о Германии ночью",
    duration: 102,
    image: {
      url: movie7,
    },
    saved: true,
  },
  {
    id: 10,
    nameRU: "Когда я думаю о Германии ночью",
    duration: 102,
    image: {
      url: movie7,
    },
    saved: true,
  },
  {
    id: 11,
    nameRU: "Когда я думаю о Германии ночью",
    duration: 102,
    image: {
      url: movie7,
    },
    saved: true,
  },
];
