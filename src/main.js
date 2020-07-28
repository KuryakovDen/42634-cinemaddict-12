'use strict';

const renderUserRankComponent = () => {
  return `
  <section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>
  `;
};

const renderFiltersComponent = () => {
  return `
  <nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>
  `;
};

const renderSortComponent = () => {
  return `
  <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>
  `;
};

// const renderFilmCardComponent = () => {
//   return `
//   <div class="films-list__container">
//     <article class="film-card">
//       <h3 class="film-card__title">The Dance of Life</h3>
//       <p class="film-card__rating">8.3</p>
//       <p class="film-card__info">
//         <span class="film-card__year">1929</span>
//         <span class="film-card__duration">1h 55m</span>
//         <span class="film-card__genre">Musical</span>
//       </p>
//       <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
//       <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
//       <a class="film-card__comments">5 comments</a>
//       <form class="film-card__controls">
//         <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
//         <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
//         <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
//       </form>
//     </article>

//     <article class="film-card">
//       <h3 class="film-card__title">Sagebrush Trail</h3>
//       <p class="film-card__rating">3.2</p>
//       <p class="film-card__info">
//         <span class="film-card__year">1933</span>
//         <span class="film-card__duration">54m</span>
//         <span class="film-card__genre">Western</span>
//       </p>
//       <img src="./images/posters/sagebrush-trail.jpg" alt="" class="film-card__poster">
//       <p class="film-card__description">Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…</p>
//       <a class="film-card__comments">89 comments</a>
//       <form class="film-card__controls">
//         <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
//         <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
//         <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
//       </form>
//     </article>

//     <article class="film-card">
//       <h3 class="film-card__title">The Man with the Golden Arm</h3>
//       <p class="film-card__rating">9.0</p>
//       <p class="film-card__info">
//         <span class="film-card__year">1955</span>
//         <span class="film-card__duration">1h 59m</span>
//         <span class="film-card__genre">Drama</span>
//       </p>
//       <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">
//       <p class="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
//       <a class="film-card__comments">18 comments</a>
//       <form class="film-card__controls">
//         <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
//         <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active">Mark as watched</button>
//         <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
//       </form>
//     </article>

//     <article class="film-card">
//       <h3 class="film-card__title">Santa Claus Conquers the Martians</h3>
//       <p class="film-card__rating">2.3</p>
//       <p class="film-card__info">
//         <span class="film-card__year">1964</span>
//         <span class="film-card__duration">1h 21m</span>
//         <span class="film-card__genre">Comedy</span>
//       </p>
//       <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" class="film-card__poster">
//       <p class="film-card__description">The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…</p>
//       <a class="film-card__comments">465 comments</a>
//       <form class="film-card__controls">
//         <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
//         <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
//         <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
//       </form>
//     </article>

//     <article class="film-card">
//       <h3 class="film-card__title">Popeye the Sailor Meets Sindbad the Sailor</h3>
//       <p class="film-card__rating">6.3</p>
//       <p class="film-card__info">
//         <span class="film-card__year">1936</span>
//         <span class="film-card__duration">16m</span>
//         <span class="film-card__genre">Cartoon</span>
//       </p>
//       <img src="./images/posters/popeye-meets-sinbad.png" alt="" class="film-card__poster">
//       <p class="film-card__description">In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…</p>
//       <a class="film-card__comments">0 comments</a>
//       <form class="film-card__controls">
//         <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
//         <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active">Mark as watched</button>
//         <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
//       </form>
//     </article>
//   </div>
//   `;
// };

const renderShowMoreCompnent = () => {
  return `
    <button class="films-list__show-more">Show more</button>
  `;
};

const renderComponent = (container, place = `beforeend`, template) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

renderComponent(siteHeaderElement, `beforeend`, renderUserRankComponent());
renderComponent(siteMainElement, `beforeend`, renderFiltersComponent());
renderComponent(siteMainElement, `beforeend`, renderSortComponent());
// renderComponent(siteMainElement, `beforeend`, renderFilmCardComponent());
renderComponent(siteMainElement, `beforeend`, renderShowMoreCompnent());
