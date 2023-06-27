"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BandBookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Super M-M (Band-BandBookings-Booking)
      BandBookings.belongsTo(models.booking);
      BandBookings.belongsTo(models.band);
    }
  }
  BandBookings.init(
    {
      bandId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.band,
          key: "id",
        },
      },
      bookingId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.booking,
          key: "id",
        },
      },
      status: {
        type: DataTypes.STRING,
      },
      rank: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "bandBooking",
      tableName: "band_bookings",
      underscored: true,
    }
  );
  return BandBookings;
};
