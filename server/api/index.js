const router = require('express').Router();

router.use('/spots', require('./spots'));
router.use('/categories', require('./categories'));

module.exports = router;
