const cors = require("cors");

var corsOptions = {
  option: "*",
};

module.exports = cors(corsOptions);