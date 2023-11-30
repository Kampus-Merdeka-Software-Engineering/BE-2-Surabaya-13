'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    static associate(models) {
    }
  }
  hotel.init({
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};