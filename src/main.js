import {renderUserRankComponent} from './view/user-rank.js';
import {renderFiltersComponent} from './view/filter.js';
import {renderFilmsComponent} from './view/films-container.js';
import {renderFilmListComponent} from './view/film-list.js';
import {renderSortComponent} from './view/sorting.js';
import {renderFilmPopupComponent} from './view/film-popup.js';
import {renderFilmCardComponent} from './view/film.js';
import {renderShowMoreCompnent} from './view/show-more.js';
import {renderStatisticsComponent} from './view/statistics.js';
// import {renderFilmExtraComponent} from './view/film-extra.js';
import {generateFilm} from './mock/film.js';
import {getUserRank} from './mock/user-rank.js';

const COUNT_OF_FILM_CARDS = 5;
// const COUNT_OF_EXTRA_FILMS = 2;

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

for (let i = 0; i < COUNT_OF_FILM_CARDS; i++) {
  renderComponent(siteFilmsList, renderFilmCardComponent(films[i]));
  console.log(films[i]);
}

renderComponent(siteFilmsElement, renderShowMoreCompnent());

// for (let j = 0; j < COUNT_OF_EXTRA_FILMS; j++) {
//   renderComponent(siteFilmsElement, renderFilmExtraComponent());
// }

renderComponent(siteFooterElement, renderStatisticsComponent());

renderComponent(siteMainElement, renderFilmPopupComponent());

const siteFilmPopup = siteMainElement.querySelector(`.film-details`);

siteFilmPopup.classList.add('visually-hidden');

const filmPoster = siteMainElement.querySelectorAll(`.film-card__poster`);
const filmHeader = siteMainElement.querySelectorAll(`.film-card__title`);
const filmComments = siteMainElement.querySelectorAll(`.film-card__comments`);

const clickElements = [filmPoster, filmHeader, filmComments];

const onClickFilmPopup = () => {
  siteFilmPopup.classList.remove('visually-hidden');
};

const openFilmPopup = (elements) => {
  elements.map((element) => {
    for (let k = 0; k < element.length; k++) {
      element[k].addEventListener(`click`, onClickFilmPopup);
    }
  });
};

openFilmPopup(clickElements);

const popupCloseButton = siteFilmPopup.querySelector(`.film-details__close-btn`);

popupCloseButton.addEventListener(`click`, () => {
  siteFilmPopup.classList.add('visually-hidden');
});
