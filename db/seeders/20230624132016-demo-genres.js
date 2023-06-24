"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("genres", [
      {
        name: "Pop",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Rock",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Punk",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jazz",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Hip Hop",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Blues",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "R&B",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Classical",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("genres", null, {});
  },
};
