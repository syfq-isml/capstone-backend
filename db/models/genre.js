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
      Genre.hasMany(models.booking);
      Genre.belongsToMany(models.user, { through: models.booking });

      //M-M with Band
      Genre.hasMany(models.bandGenre);
      Genre.belongsToMany(models.band, { through: models.bandGenre });
    }
  }
  Genre.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "genre",
      tableName: "genres",
      underscored: true,
    }
  );
  return Genre;
};
