import {getRandomElement, getRandomInteger, prepareDate} from '../utils/util.js';
import {films, descriptionFilms, posters, genres, emotions, authors} from '../utils/common.js';

const FILM_RELEASE = {
  START: 1910,
  END: 2020
}

const generateRating = () => {
  return getRandomInteger(1, 9) + getRandomInteger(1, 9) / 10;
};

const generateFilmDuration = () => {
  return `${getRandomInteger(1, 3)}h ${getRandomInteger(10, 59)}m`;
}

const DATE_STEP = getRandomInteger(-10, 10);

const generateFilm = () => {
  return {
    name: getRandomElement(films),
    rating: generateRating(),
    poster: getRandomElement(posters),
    year: getRandomInteger(FILM_RELEASE.START, FILM_RELEASE.END),
    duration: generateFilmDuration(),
    genre: getRandomElement(genres),
    description: getRandomElement(descriptionFilms),
    comments: {
      emotion: getRandomElement(emotions),
      date: prepareDate(new Date() + DATE_STEP),
      author: getRandomElement(authors),
      message: getRandomElement(descriptionFilms),
      hasDeleted: false
    }
  };
};

export {generateFilm};
