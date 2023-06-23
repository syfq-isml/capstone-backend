"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("band_bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bandId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "bands",
          },
          key: "id",
        },
        field: "band_id",
      },
      bookingId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "bookings",
          },
          key: "id",
        },
        field: "booking_id",
      },
      status: {
        type: Sequelize.STRING,
      },
      rank: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("band_bookings");
  },
};
