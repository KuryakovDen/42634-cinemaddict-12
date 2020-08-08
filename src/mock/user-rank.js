import {getRandomInteger} from '../utils/util.js';

const watchedFilms = getRandomInteger(0, 40);
let userRank = ``;

switch (true) {
  case watchedFilms >= 1 && watchedFilms <= 10:
    userRank = `Novice`;
    break;

  case watchedFilms >= 11 && watchedFilms <= 20:
    userRank = `Fan`;
    break;

  case watchedFilms >= 20:
    userRank = `Movie Buff`;
    break;
  default:
    userRank = ``;
    break;
}

const getUserRank = () => {
  return userRank;
};

export {getUserRank};
