const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { blogService } = params;

  router.get('/', async (request, response) => {
    const blogs = await blogService.getList();
    return response.json(blogs);
  });

  router.get('/:shortTitle', async (request, response) => {
    const blogs = await blogService.getBlog(request.params.shortTitle);
    response.render('layout', { pageTitle: 'ArticleTitle', template: 'blogs', blogs });
  });

  return router;
};
