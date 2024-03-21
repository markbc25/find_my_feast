const { Sequelize } = require('sequelize');

// Initialize Sequelize connection
const sequelize = new Sequelize('find_my_food', 'root', 'ilikeanime', {
  dialect: 'mysql',
  host: 'localhost',
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
