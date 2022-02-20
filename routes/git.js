const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    return response.send('Git');
  });

  return router;
};
