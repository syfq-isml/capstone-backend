"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Super M-M (Band-BandBookings-Bookings)
      Booking.belongsToMany(models.Band, { through: "band_bookings" });
      Booking.hasMany(models.BandBookings);

      // Super M-M (User-Booking-Genre)
      Booking.belongsToMany(models.User, { through: "bookings", as: "Client" });
      Booking.hasMany(models.Genre);
    }
  }
  Booking.init(
    {
      startDateTime: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      endDateTime: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      venue: {
        type: DataTypes.TEXT,
      },
      eventName: {
        type: DataTypes.STRING,
      },
      genreId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Genre",
          key: "id",
        },
      },
      clientId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      isContactMe: {
        type: DataTypes.BOOLEAN,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Booking",
      underscored: true,
    }
  );
  return Booking;
};
