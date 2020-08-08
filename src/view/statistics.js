import {getRandomInteger} from '../utils/util.js';

const renderStatisticsComponent = () => {
  return `
    <section class="footer__statistics">
      <p>${getRandomInteger(500, 4000)} movies inside</p>
    </section>
  `;
};

export {renderStatisticsComponent};
