import {renderUserRankComponent} from './view/user-rank.js';
import {renderFiltersComponent} from './view/filter.js';

const COUNT_OF_FILM_CARDS = 5;

const renderSortComponent = () => {
  return `
  <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>
  `;
};

const renderFilmBoardComponent = () => {
  return `
  <div class="films-list__container">

  </div>
  `;
};

const renderFilmCardComponent = () => {
  return `
  <article class="film-card">
    <h3 class="film-card__title">The Dance of Life</h3>
    <p class="film-card__rating">8.3</p>
    <p class="film-card__info">
      <span class="film-card__year">1929</span>
      <span class="film-card__duration">1h 55m</span>
      <span class="film-card__genre">Musical</span>
    </p>
    <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
    <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
    <a class="film-card__comments">5 comments</a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
    </form>
  </article>
  `;
};

const renderShowMoreCompnent = () => {
  return `
    <button class="films-list__show-more">Show more</button>
  `;
};

const renderStatisticsComponent = () => {
  return `
  <section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>
  `;
};

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


