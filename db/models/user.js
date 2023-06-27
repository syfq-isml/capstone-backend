"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Super M-M (User-Booking-Genre)
      User.hasMany(models.booking);
      User.belongsToMany(models.genre, {
        through: models.booking,
        as: "client",
      });
    }
  }
  User.init(
    {
      isAdmin: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "user",
      tableName: "users",
      underscored: true,
    }
  );

  return User;
};
