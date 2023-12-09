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
    Description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotel',
    freezeTableName: true
  });
  return hotel;
};