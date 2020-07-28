'use strict';

const renderComponent = (container, place = `beforeend`, template) => {
  container.insertAdjacentHTML(place, template);
};
