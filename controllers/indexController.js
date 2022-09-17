const getPersonName = (req, res) => {
  res.send('Hello, Kendra Burns, How are you!');
};

module.exports = { getPersonName } // example of destructuring

// Note to self:
// could also do this
//module.exports.getPersonName = getPersonName;
// or this
//module.exports = { getPersonName: getPersonName }

// could also do this
/* module.exports.getPersonName = (req, res) => {
  res.send('Hello, Kendra Burns!');
};
*/