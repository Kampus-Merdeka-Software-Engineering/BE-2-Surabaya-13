'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subscribes extends Model {

    static associate(models) {
    }
  }
  subscribes.init({
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subscribes',
  });
  return subscribes;
};