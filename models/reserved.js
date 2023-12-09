'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reserved extends Model {
    static associate(models) {
    }
  }
  reserved.init({
    Name: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reserved',
  });
  return reserved;
};