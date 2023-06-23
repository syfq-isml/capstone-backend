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
      BandBookings.belongsTo(models.Booking);
      BandBookings.belongsTo(models.Band);
    }
  }
  BandBookings.init(
    {
      bandId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Band",
          key: "id",
        },
      },
      bookingId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Booking",
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
      modelName: "BandBookings",
      underscored: true,
    }
  );
  return BandBookings;
};
