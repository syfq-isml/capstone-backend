"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Availability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Super M-M (Band-Availability-Genre)
      Availability.belongsTo(models.Band);
      Availability.belongsTo(models.Genre);
    }
  }
  Availability.init(
    {
      bandId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Band",
          key: "id",
        },
      },
      genreId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Genre",
          key: "id",
        },
      },
      startBlockedTiming: {
        type: DataTypes.DATE,
      },
      endBlockedTiming: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Availability",
      underscored: true,
    }
  );
  return Availability;
};
