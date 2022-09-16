const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Hello, Eric Burns!');
});

module.exports = routes;
