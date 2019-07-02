const express = require('express');
const router = express.Router();
const { Spot, Category, db } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({ include: [{ all: true }] });
    res.send(categories);
  } catch (err) {
    next(err);
  }
});

router.get('/:categoryId', async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findOne({
      where: [{ id: categoryId }],
      include: [{ all: true }],
    });
    res.send(category);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
