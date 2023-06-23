"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BandGenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  BandGenres.init(
    {
      genreId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Genre",
          key: "id",
        },
      },
      bandId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Band",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "BandGenres",
      underscored: true,
    }
  );
  return BandGenres;
};
