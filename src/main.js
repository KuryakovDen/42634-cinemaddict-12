'use strict';

const renderUserRankComponent = () => {
  return `
  <section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>
  `;
};

// const renderMenuComponent = () => {
//   return `
//     <p>Denis</p>
//   `;
// };

const renderComponent = (container, place = `beforeend`, template) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

renderComponent(siteHeaderElement, `beforeend`, renderUserRankComponent());
// renderComponent(siteMainElement, `beforeend`, renderMenuComponent());
