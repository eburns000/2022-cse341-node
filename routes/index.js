const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Hello, Kendra Burns!');
});

module.exports = routes;
