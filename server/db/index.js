const db = require('./db');
// require each of your models here...

// const Artist = require('./artist');
// const Song = require('./song');
// const Album = require('./album');

//relations go here

// Song.belongsTo(Album);
// Album.hasMany(Song);
// Song.belongsTo(Artist);
// Artist.hasMany(Song);
// Album.belongsTo(Artist);
// Artist.hasMany(Album);

module.exports = {
  db,
  Artist,
  Song,
  Album,
};
