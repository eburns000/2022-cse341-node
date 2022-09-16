const express = require('express');
const app = express();
const port = 3000; // process.env.PORT || 3000 for heroku

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
