"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("bookings", [
      {
        start_date_time: new Date(),
        end_date_time: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
        venue: "M Hotel",
        event_name: "Wedding",
        genre_id: 1,
        client_id: 2,
        is_contact_me: true,
        status: "Pending",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        start_date_time: new Date(),
        end_date_time: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
        venue: "Pub @ Clarke Quay",
        event_name: "Pub Gig",
        genre_id: 1,
        client_id: 2,
        is_contact_me: false,
        status: "Awaiting Payment",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        start_date_time: new Date(),
        end_date_time: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
        venue: "Void Deck",
        event_name: "Malay Wedding",
        genre_id: 1,
        client_id: 2,
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
