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
        genre_id: 8,
        band_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 7,
        band_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
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
        genre_id: 4,
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
      {
        genre_id: 2,
        band_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 3,
        band_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 4,
        band_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 1,
        band_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 1,
        band_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 2,
        band_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 7,
        band_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 5,
        band_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        genre_id: 5,
        band_id: 10,
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
