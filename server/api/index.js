const router = require('express').Router();

// connect your API routes here!
router.use('/albums', require('./album'));

module.exports = router;
