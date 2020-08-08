import {getUserRank} from '../mock/user-rank.js'

const renderUserRankComponent = (rank) => {
  rank = getUserRank();

  return rank !== 0 ? `
    <section class="header__profile profile">
      <p class="profile__rating">${rank}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>
  ` : ``;
};

export {renderUserRankComponent};
