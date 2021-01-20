const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");

const allMovies = [];

// Добавляем кино из инпута объектом в массив
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle: function() {
      return this.info.title.toUpperCase();
    } // shortand below
    // getFormattedTitle() {
    //   return this.info.title.toUpperCase();
    // }
  };
  allMovies.push(newMovie);
  renderMovies();
};

// Создает элемент списка
const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");
  if (allMovies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = ""; // clear entire list
// Функция поиска
  const filteredMovies = !filter
    ? allMovies
    : allMovies.filter((movie) => movie.info.title.includes(filter));

  // 9.12 Ниже очень важная конструкция по доступу к динамическим ключам и значениям
  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    const { info, ...otherProps } = movie; // obj destructiring
    console.log(otherProps);
    // const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let message = getFormattedTitle.call(movie) + " - ";
    for (const key in info) {
      if (key !== "title") {
        message = message + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = message;
    movieList.append(movieEl);
  });
};

// Функция поиска
const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchMovieBtn.addEventListener("click", searchMovieHandler);
