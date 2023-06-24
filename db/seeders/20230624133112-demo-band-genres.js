"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("band_genres", [
      {
        genre_id: 1,
        band_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 2,
        band_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 3,
        band_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 1,
        band_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 2,
        band_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 4,
        band_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 6,
        band_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("band_genres", null, {});
  },
};
