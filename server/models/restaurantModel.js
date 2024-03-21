const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Restaurant = sequelize.define('Restaurant', {
    rest_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rest_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    distance: {
      type: DataTypes.FLOAT
    },
    cuisine_type: {
      type: DataTypes.STRING(255)
    }
  },
  {
    tableName: 'Restaurant',
    timestamps: false
  });
  
  module.exports = Restaurant;