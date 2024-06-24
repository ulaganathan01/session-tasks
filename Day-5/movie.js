class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(arr) {
    const res = [];
    for (let film of arr) {
      if (film.rating === "PG") {
        res.push(film.title);
      }
    }
    return res;
  }
}

const film1 = new Movie("Kuruvi", "Red Giant Movies");
const film2 = new Movie("Casino Royale", "Eon Productions", "PG13");
const film3 = new Movie("Sulthan", "Dream Warrior Pictures", "PG");
const film4 = new Movie("Pokkiri", "Kanagarathna Movies", "R");
const film5 = new Movie("Master", "XB Film Creators", "PG");
console.log(Movie.getPG([film1, film2, film3, film4, film5]));
