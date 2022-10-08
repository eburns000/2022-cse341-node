const router = require('express').Router();
const swagger = require('./swagger');

router.use('/', swagger);
router.use('/contacts', require('./contacts'));

module.exports = router;
