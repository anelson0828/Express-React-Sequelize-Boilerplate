const Sequelize = require('sequelize');
const db = require('../db');

const Spot = db.define('spot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
  },
  notes: {
    type: Sequelize.TEXT,
  },
  neighborhood: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  recommendedBy: {
    type: Sequelize.STRING,
  },
});

module.exports = Spot;
