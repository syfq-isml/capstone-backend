"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        isAdmin: false,
        name: "Liz",
        email: "liz@liz.com",
        password: "password123",
        phoneNumber: "91234567",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        isAdmin: true,
        name: "Bob",
        email: "bob@bob.com",
        password: "admin123",
        phoneNumber: "98765432",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("users", null, {});
  },
};
