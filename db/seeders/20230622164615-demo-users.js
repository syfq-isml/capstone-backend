"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        is_admin: true,
        name: "Bob",
        email: "bob@bob.com",
        password:
          "$2b$10$8AfHhrHzA1j/AmNSAcNWH.7GDXhRUtUUQI0dkjzdsWkiMv0Czt6za",
        phone_number: "91234567",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        is_admin: false,
        name: "Liz",
        email: "liz@liz.com",
        password:
          "$2b$10$GQtAUfIpDOqfSzW7L2/dreoI4NHy7X9Xr/3uIOgJzWJrg0Xv08WKO",
        phone_number: "98765432",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
