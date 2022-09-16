const router = require('express').Router();
const {getPersonName} = require('../controllers/indexController'); // Note to self: example of destructuring
//const getPersonName = require('../controllers/indexController').getPersonName; // Note to self: written in more verbose way

router.get('/', getPersonName);

module.exports = router;
