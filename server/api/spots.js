const express = require('express');
const router = express.Router();
const { Spot, Category, db } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const spots = await Spot.findAll({ include: [{ model: Category }] });
    res.send(spots);
  } catch (err) {
    next(err);
  }
});

router.get('/:spotId', async (req, res, next) => {
  try {
    const spotId = req.params.spotId;
    const spot = await Spot.findOne({
      where: [{ id: spotId }],
      include: [{ all: true }],
    });
    res.send(spot);
  } catch (err) {
    next(err);
  }
});

router.get('/:spotId', async (req, res, next) => {
  try {
    const spotId = req.params.spotId;
    const spot = await Spot.findOne({
      where: [{ id: spotId }],
      include: [{ all: true }],
    });
    res.send(spot);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
