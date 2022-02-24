const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { tutorialService } = params;
  router.get('/', async (request, response) => {
    const tutorial = await tutorialService.getList();
    return response.json(tutorial);
  });

  router.get('/:shortTitle', (request, response) => response.send(`Detail page of ${request.params.shortTitle}`));

  return router;
};
