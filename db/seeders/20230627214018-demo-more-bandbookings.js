"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("band_bookings", [
      {
        band_id: 1,
        booking_id: 4,
        status: "Not Contacted",
        rank: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 2,
        booking_id: 4,
        status: "Confirmed",
        rank: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 3,
        booking_id: 4,
        status: "Rejected",
        rank: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 1,
        booking_id: 5,
        status: "Confirmed",
        rank: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 2,
        booking_id: 5,
        status: "Rejected",
        rank: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 3,
        booking_id: 5,
        status: "Rejected",
        rank: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 1,
        booking_id: 6,
        status: "Not Contacted",
        rank: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 5,
        booking_id: 6,
        status: "Rejected",
        rank: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 3,
        booking_id: 6,
        status: "Confirmed",
        rank: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("band_bookings", null, {});
  },
};
