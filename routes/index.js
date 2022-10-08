const router = require('express').Router();
const swagger = require('./swagger');
const openCors = require('../middleware/openCors');

router.use('/', swagger);
router.use('/contacts', require('./contacts'));
router.use(openCors);

module.exports = router;
