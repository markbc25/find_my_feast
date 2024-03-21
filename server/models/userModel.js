const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

// Define User model
const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    restrictions: {
      type: DataTypes.ENUM('Pescatarian', 'Gluten-Free', 'Vegetarian', 'Vegan'),
      allowNull: true 
    }
  }, {
    tableName: 'User', // optional: explicitly define table name
    timestamps: false // optional: disable timestamps (createdAt, updatedAt)
  });

module.exports = User;
