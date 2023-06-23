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
      Band.hasMany(models.BandBookings);
      Band.belongsToMany(models.Booking, { through: "band_bookings" });

      // Super M-M (Band-Availability-Genre)
      Band.hasMany(models.Availability);
      Band.belongsToMany(models.Genre, { through: "availabilities" });

      //M-M (Band-BandGenres-Genre)
      Band.belongsToMany(models.Genre, { through: "band_genres" });
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
      modelName: "Band",
      underscored: true,
    }
  );
  return Band;
};
