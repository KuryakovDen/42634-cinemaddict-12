import {renderUserRankComponent} from './view/user-rank.js';
import {renderFiltersComponent} from './view/filter.js';
import {renderFilmsComponent} from './view/films-container.js';
import {renderFilmListComponent} from './view/film-list.js';
import {renderSortComponent} from './view/sorting.js';
import {renderFilmCardComponent} from './view/film.js';
import {renderShowMoreCompnent} from './view/show-more.js';
import {renderStatisticsComponent} from './view/statistics.js';
import {renderFilmExtraComponent} from './view/film-extra.js';
import {generateFilm} from './mock/film.js';

const COUNT_OF_FILM_CARDS = 5;
const COUNT_OF_EXTRA_FILMS = 2;

const films = new Array(COUNT_OF_FILM_CARDS).fill().map(generateFilm);

const renderComponent = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const siteFooterElement = document.querySelector(`.footer`);


renderComponent(siteHeaderElement, renderUserRankComponent());
renderComponent(siteMainElement, renderFiltersComponent());
renderComponent(siteMainElement, renderSortComponent());

renderComponent(siteMainElement, renderFilmsComponent());

const siteFilmsElement = siteMainElement.querySelector(`.films`);

renderComponent(siteFilmsElement, renderFilmListComponent());

const siteFilmsList = siteMainElement.querySelector(`.films-list__container`);

for (let i = 0; i < COUNT_OF_FILM_CARDS; i++) {
  renderComponent(siteFilmsList, renderFilmCardComponent(films[i]));
}

renderComponent(siteFilmsElement, renderShowMoreCompnent());

for (let j = 0; j < COUNT_OF_EXTRA_FILMS; j++) {
  renderComponent(siteFilmsElement, renderFilmExtraComponent());
}

renderComponent(siteFooterElement, renderStatisticsComponent());
