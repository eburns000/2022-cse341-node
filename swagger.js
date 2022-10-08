const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Conacts API',
    description: 'This Contacts API provides access to the Contacts database in MongoDB',
  },
  host: '',
  schemes: ['https','http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);