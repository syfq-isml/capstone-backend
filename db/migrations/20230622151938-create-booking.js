"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      startDateTime: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "start_date_time",
      },
      endDateTime: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "end_date_time",
      },
      venue: {
        type: Sequelize.TEXT,
      },
      eventName: {
        type: Sequelize.STRING,
        field: "event_name",
      },
      genreId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "genres",
          },
          key: "id",
        },
        field: "genre_id",
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
        field: "client_id",
      },
      isContactMe: {
        type: Sequelize.BOOLEAN,
        field: "is_contact_me",
      },
      status: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("bookings");
  },
};
