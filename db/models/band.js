"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Super M-M (Band-BandBookings-Booking)
      Band.hasMany(models.bandBooking);
      Band.belongsToMany(models.booking, { through: models.bandBooking });

      // 1-M (Band-Availability)
      Band.hasMany(models.availability);

      //Super M-M (Band-BandGenres-Genre)
      Band.hasMany(models.bandGenre);
      Band.belongsToMany(models.genre, { through: models.bandGenre });
    }
  }
  Band.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      gigRate: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
      },
      photoUrl: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "band",
      tableName: "bands",
      underscored: true,
    }
  );
  return Band;
};
