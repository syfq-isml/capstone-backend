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
      Booking.hasMany(models.bandBooking);
      Booking.belongsToMany(models.band, { through: models.bandBooking });

      // Super M-M (User-Booking-Genre)
      Booking.belongsTo(models.user, { foreignKey: "clientId" });
      Booking.belongsTo(models.genre);
    }
  }
  Booking.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
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
          model: sequelize.models.genre,
          key: "id",
        },
      },
      clientId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.user,
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
      modelName: "booking",
      tableName: "bookings",
      underscored: true,
    }
  );
  return Booking;
};
