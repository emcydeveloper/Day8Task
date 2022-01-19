let movieList = [
  { movieName: "Doctor", studio: "MovieStudio", rating: "PG25" },
  { movieName: "SpiderMan", studio: "Marvel", rating: "PG" },
  { movieName: "Alai Payuthey", studio: "Madras Talkies", rating: "PG" },
];
class Movie {
  constructor(movieName, studio, ratings = "PG") {
    this.title = movieName;
    this.studio = studio;
    this.rating = ratings;
  }

  displayMovie() {
    // taskContent.innerHTML("test")
    // console.log(`${this.title} | ${this.studio} | ${this.rating}`);

    displayMovie.innerHTML = `<h1>Instance created from the class Movie</h1> <p><b>MovieName:</b> ${this.title} | <b>Studio:</b> ${this.studio} | <b>Ratings:</b> ${this.rating}</p>`;
  }

  static getPG(...movieList) {
    let getMovieName = movieList
      .filter((list) => list.rating == "PG")
      .map((listNames) => listNames.movieName);
    return getMovieName;
  }
}

let displayMovie = document.createElement("div");
let displayPG = document.createElement("div");

function callMovie(_name, _studio, _rating) {
  let myMovie = new Movie(_name, _studio, _rating);
  myMovie.displayMovie();
}

let taskHeading = document.getElementById("head-Container");
taskHeading.innerHTML =
  "<h1>Task - Class Movies - Enter the movie infomartion to create an instance from the class Movie</h1>";

let taskContent = document.getElementById("main-Container");

let txtMovieName = document.createElement("input");
txtMovieName.setAttribute("type", "text");
txtMovieName.placeholder = "Enter the Movie name";

let txtStudio = document.createElement("input");
txtStudio.setAttribute("type", "text");
txtStudio.placeholder = "Enter the Studio name";

let txtRating = document.createElement("input");
txtRating.setAttribute("type", "text");
txtRating.placeholder = "Enter the ratings";

let btnSub = document.createElement("button");
// btnSub.classList = "task";
btnSub.innerText = "Submit";

let btnGetPG = document.createElement("button");
btnGetPG.className = "task";
btnGetPG.style = "margin-top:80px"
btnGetPG.innerText = "Click to get the list of Movies with ratings PG";

btnSub.addEventListener("click", () => {
  callMovie(txtMovieName.value, txtStudio.value, txtRating.value);
});

btnGetPG.addEventListener("click", () => {
  let getList = Movie.getPG(...movieList);
  displayPG.innerHTML = `<h1>Displaying list of movies with ratings PG</h1> <p>${getList}</p>`;
  console.log(getList);
});

// displayPG.innerHTML = "test";

taskContent.append(
  txtMovieName,
  txtStudio,
  txtRating,
  btnSub,
  displayMovie,
  btnGetPG,
  displayPG
);
// taskContent.appendChild(displayMovie);
