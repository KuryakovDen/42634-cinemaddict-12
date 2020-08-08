import {posters, films, descriptionFilms} from '../utils/common.js';
import {getRandomElement, getRandomInteger} from '../utils/util.js';

const renderFilmCardComponent = () => {
  return `
    <article class="film-card">
      <h3 class="film-card__title">${getRandomElement(films)}</h3>
      <p class="film-card__rating">${getRandomInteger(1, 9)}.${getRandomInteger(1, 9)}</p>
      <p class="film-card__info">
        <span class="film-card__year">1929</span>
        <span class="film-card__duration">1h 55m</span>
        <span class="film-card__genre">Musical</span>
      </p>
      <img src="./images/posters/${getRandomElement(posters)}" alt="" class="film-card__poster">
      <p class="film-card__description">${getRandomElement(descriptionFilms)}</p>
      <a class="film-card__comments">5 comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>
  `;
};

export {renderFilmCardComponent};
