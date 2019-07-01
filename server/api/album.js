const express = require('express');
const router = express.Router();
const { Album, Song, Artist, db } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll({ include: [{ model: Artist }] });
    res.send(albums);
  } catch (err) {
    next(err);
  }
});

router.get('/:albumId', async (req, res, next) => {
  try {
    const albumId = req.params.albumId;
    const album = await Album.findOne({
      where: [{ id: albumId }],
      include: [{ all: true }],
    });
    res.send(album);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
