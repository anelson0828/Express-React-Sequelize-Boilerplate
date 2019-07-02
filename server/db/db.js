const Sequelize = require('sequelize');
// const db = new Sequelize(
//   process.env.DATABASE_URL || 'postgres://localhost:5432/fave-spots',
//   {
//     logging: false,
//   }
// );

const db = new Sequelize('postgres://localhost:5432/fave-spots', {
  logging: false,
});

module.exports = db;
