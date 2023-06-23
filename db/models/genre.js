"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Super M-M (User-Booking-Genre)
      Genre.hasMany(models.Booking);
      Genre.belongsToMany(models.User, { through: "bookings" });

      //Super M-M (Genre-Availabilty-Band)
      Genre.hasMany(models.Availability);
      Genre.belongsToMany(models.Band, { through: "availabilities" });

      //M-M with Band
      Genre.belongsToMany(models.Band, { through: "band_genres" });
    }
  }
  Genre.init(
    {
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Genre",
      underscored: true,
    }
  );
  return Genre;
};
