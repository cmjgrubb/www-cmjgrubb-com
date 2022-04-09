const express = require('express');

const blogsRoute = require('./blogs');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response) => {
    response.render('layout', { pageTitle: 'CMJ', template: 'index' });
  });

  router.use('/blogs', blogsRoute(params));

  return router;
};
