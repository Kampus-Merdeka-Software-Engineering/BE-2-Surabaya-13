'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reserve extends Model {
    static associate(models) {
    }
  }
  reserve.init({
    Name: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reserve',
  });
  return reserve;
};