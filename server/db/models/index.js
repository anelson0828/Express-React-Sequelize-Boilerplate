const db = require('../db');

const Spot = require('./spot');
const Category = require('./category');

//relations go here

Spot.belongsTo(Category);
Category.hasMany(Spot);

module.exports = {
  db,
  Spot,
  Category,
};
