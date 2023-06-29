"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        is_admin: true,
        name: "admin",
        email: "admin@opus.com",
        password:
          "$2b$10$TwJC3x5fkhrdK4bOlZUryuw8iAXtZhjkfFp8AIf7LR1F9mE.Qrkdy", // opus1234
        phone_number: "91238888",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        is_admin: false,
        name: "Johnny Silverhand",
        email: "j@j.com",
        password:
          "$2b$10$TwJC3x5fkhrdK4bOlZUryuw8iAXtZhjkfFp8AIf7LR1F9mE.Qrkdy", //opus1234
        phone_number: "98881111",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
