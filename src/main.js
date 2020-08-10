import {renderUserRankComponent} from './view/user-rank.js';
import {renderFiltersComponent} from './view/filter.js';
import {renderFilmsComponent} from './view/films-container.js';
import {renderFilmListComponent} from './view/film-list.js';
import {renderSortComponent} from './view/sorting.js';
import {renderFilmPopupComponent} from './view/film-popup.js';
import {renderFilmCardComponent} from './view/film.js';
import {renderShowMoreCompnent} from './view/show-more.js';
import {renderStatisticsComponent} from './view/statistics.js';
import {generateFilm} from './mock/film.js';
import {getUserRank} from './mock/user-rank.js';

let SHOW_FILMS_STEP = 5;
const COUNT_OF_FILM_CARDS = 18;

const films = new Array(COUNT_OF_FILM_CARDS).fill().map(generateFilm);
const rank = getUserRank();

const renderComponent = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const siteFooterElement = document.querySelector(`.footer`);

renderComponent(siteHeaderElement, renderUserRankComponent(rank));
renderComponent(siteMainElement, renderFiltersComponent());
renderComponent(siteMainElement, renderSortComponent());

renderComponent(siteMainElement, renderFilmsComponent());

const siteFilmsElement = siteMainElement.querySelector(`.films`);

renderComponent(siteFilmsElement, renderFilmListComponent());

const siteFilmsList = siteMainElement.querySelector(`.films-list__container`);

for (let i = 0; i < Math.min(COUNT_OF_FILM_CARDS, SHOW_FILMS_STEP); i++) {
  renderComponent(siteFilmsList, renderFilmCardComponent(films[i]));
}

renderComponent(siteFooterElement, renderStatisticsComponent());
renderComponent(siteMainElement, renderFilmPopupComponent(films[0]));

const siteFilmPopup = siteMainElement.querySelector(`.film-details`);

// siteFilmPopup.classList.add('visually-hidden');

const popupCloseButton = siteFilmPopup.querySelector(`.film-details__close-btn`);

popupCloseButton.addEventListener(`click`, () => {
  siteFilmPopup.classList.add(`visually-hidden`);
});

if (films.length > SHOW_FILMS_STEP) {
  let renderedFilmsCount = SHOW_FILMS_STEP;
  renderComponent(siteFilmsElement, renderShowMoreCompnent());

  const showFilmButton = siteMainElement.querySelector(`.films-list__show-more`);

  const onClickShowMoreButton = (e) => {
    e.preventDefault();

    films
      .slice(renderedFilmsCount, renderedFilmsCount + SHOW_FILMS_STEP)
      .forEach((film) => {
        renderComponent(siteFilmsList, renderFilmCardComponent(film));
      });

    renderedFilmsCount += SHOW_FILMS_STEP;

    if (renderedFilmsCount >= films.length) {
      showFilmButton.remove();
    }
  };

  showFilmButton.addEventListener(`click`, onClickShowMoreButton);
}
