import {getRandomElement, getRandomInteger, prepareDate, getSomeRandomElements, getRandomBoolean} from '../utils/util.js';
import {
  films,
  descriptionFilms,
  posters, genres,
  emotions,
  commentAuthors,
  directors,
  ageRatings,
  countries,
  writers,
  actors
} from '../utils/common.js';

const FILM_RELEASE = {
  START: 1910,
  END: 2020
};

const generateRating = () => {
  return getRandomInteger(1, 9) + getRandomInteger(1, 9) / 10;
};

const generateFilmDuration = () => {
  return `${getRandomInteger(1, 3)}h ${getRandomInteger(10, 59)}m`;
};

const generateComment = () => {
  return {
    emotion: getRandomElement(emotions),
    date: prepareDate(new Date()),
    author: getRandomElement(commentAuthors),
    message: getSomeRandomElements(descriptionFilms)
  };
};

const generateFilmComments = (commentsCount) => {
  const filmComments = [];

  for (let i = 0; i < commentsCount; i++) {
    filmComments.push(generateComment());
  }

  return filmComments;
};

const comments = generateFilmComments(getRandomInteger(1, 5));

const generateFilm = () => {
  return {
    watchList: getRandomBoolean(),
    history: getRandomBoolean(),
    favorites: getRandomBoolean(),
    name: getRandomElement(films),
    rating: generateRating(),
    poster: getRandomElement(posters),
    ageRating: getRandomElement(ageRatings),
    year: getRandomInteger(FILM_RELEASE.START, FILM_RELEASE.END),
    director: getRandomElement(directors),
    writers: getSomeRandomElements(writers).join(`, `),
    actors: getSomeRandomElements(actors).join(`, `),
    releaseDate: new Date(),
    duration: generateFilmDuration(),
    country: getRandomElement(countries),
    genre: getSomeRandomElements(genres),
    description: getSomeRandomElements(descriptionFilms),
    commentsCount: comments.length,
    comments
  };
};

export {generateFilm};
