import {renderUserRankComponent} from './view/user-rank.js';
import {renderFiltersComponent} from './view/filter.js';
import {renderFilmBoardComponent} from './view/film-board.js';
import {renderSortComponent} from './view/sorting.js';
import {renderFilmCardComponent} from './view/film.js';
import {renderShowMoreCompnent} from './view/show-more.js';
import {renderStatisticsComponent} from './view/statistics.js';

const COUNT_OF_FILM_CARDS = 5;

const renderComponent = (container, place = `beforeend`, template) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const siteFooterElement = document.querySelector(`.footer`);


renderComponent(siteHeaderElement, `beforeend`, renderUserRankComponent());
renderComponent(siteMainElement, `beforeend`, renderFiltersComponent());
renderComponent(siteMainElement, `beforeend`, renderSortComponent());
renderComponent(siteMainElement, `beforeend`, renderFilmBoardComponent());

const siteFilmsContainer = siteMainElement.querySelector(`.films-list__container`);

for (let i = 0; i < COUNT_OF_FILM_CARDS; i++) {
  renderComponent(siteFilmsContainer, `beforeend`, renderFilmCardComponent());
}

renderComponent(siteMainElement, `beforeend`, renderShowMoreCompnent());
renderComponent(siteFooterElement, `beforeend`, renderStatisticsComponent());


