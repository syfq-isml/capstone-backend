"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BandGenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Super M-M (Band-BandGenres-Genre)
      BandGenres.belongsTo(models.band);
      BandGenres.belongsTo(models.genre);
    }
  }
  BandGenres.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      genreId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.genre,
          key: "id",
        },
      },
      bandId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.band,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "bandGenre",
      tableName: "band_genres",
      underscored: true,
    }
  );
  return BandGenres;
};
