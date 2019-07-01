const Sequelize = require('sequelize');
const db = require('./db');

//example SQL table

const Song = db.define('song', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  audioUrl: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  },
});

module.exports = Song;
