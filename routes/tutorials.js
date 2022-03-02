const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { tutorialService } = params;
  router.get('/', async (request, response) => {
    const tutorials = await tutorialService.getList();
    return response.json(tutorials);
  });

  router.get('/:shortTitle', (request, response) => response.send(`Detail page of ${request.params.shortTitle}`));

  return router;
};
