"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("band_genres", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("band_genres");
  },
};
