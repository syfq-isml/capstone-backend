"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("band_bookings", [
      {
        band_id: 4,
        booking_id: 1,
        status: "Not Contacted",
        rank: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 5,
        booking_id: 1,
        status: "Rejected",
        rank: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 6,
        booking_id: 1,
        status: "Rejected",
        rank: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 4,
        booking_id: 2,
        status: "Not Contacted",
        rank: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 5,
        booking_id: 2,
        status: "Confirmed",
        rank: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 6,
        booking_id: 2,
        status: "Rejected",
        rank: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 4,
        booking_id: 3,
        status: "Not Contacted",
        rank: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 5,
        booking_id: 3,
        status: "Rejected",
        rank: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        band_id: 6,
        booking_id: 3,
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
