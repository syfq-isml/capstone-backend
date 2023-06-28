"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("availabilities", {
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
      startBlockedTiming: {
        type: Sequelize.DATE,
        field: "start_blocked_timing",
      },
      endBlockedTiming: {
        type: Sequelize.DATE,
        field: "end_blocked_timing",
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
    await queryInterface.dropTable("availabilities");
  },
};
