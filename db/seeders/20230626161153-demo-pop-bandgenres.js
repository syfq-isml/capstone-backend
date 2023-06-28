"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("band_genres", [
      {
        genre_id: 1,
        band_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 1,
        band_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 1,
        band_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("band_genres", null, {});
  },
};
