"use strict";

const number0Offilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
  count: number0Offilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const names = "Bogdan";

const a = +prompt(`Один из последних просмотренных фильмов ${names}?`, ""),
  b = +prompt("На сколько оцените его?", ""),
  c = +prompt("Один из последних просмотренных фильмов?", ""),
  d = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
