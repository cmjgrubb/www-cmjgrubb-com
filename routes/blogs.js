const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { blogService } = params;

  router.get('/', async (request, response) => {
    const blogs = await blogService.getList();
    return response.json(blogs);
  });

  router.get('/:shortTitle', (request, response) => response.send(`Detail page of ${request.params.shortTitle}`));

  return router;
};
