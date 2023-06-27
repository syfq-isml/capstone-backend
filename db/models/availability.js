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
      // 1-M (Band-Availability-Genre)
      Availability.belongsTo(models.band);
    }
  }
  Availability.init(
    {
      bandId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.band,
          key: "id",
        },
      },
      genreId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.genre,
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
      modelName: "availability",
      tableName: "availabilities",
      underscored: true,
    }
  );
  return Availability;
};
