"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("bookings", [
      {
        start_date_time: new Date(),
        end_date_time: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
        venue: "Araska Corporation Lobby",
        event_name: "Corporate Dinner",
        genre_id: 1,
        client_id: 4,
        is_contact_me: true,
        status: "Pending",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        start_date_time: new Date(),
        end_date_time: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
        venue: "Pondsmith Youth Center",
        event_name: "Charity Event",
        genre_id: 5,
        client_id: 4,
        is_contact_me: false,
        status: "Awaiting Payment",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        start_date_time: new Date(),
        end_date_time: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
        venue: "NUS Campus Building",
        event_name: "Rock and Roll Festival",
        genre_id: 2,
        client_id: 4,
        is_contact_me: true,
        status: "Paid & Confirmed",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("bookings", null, {});
  },
};
