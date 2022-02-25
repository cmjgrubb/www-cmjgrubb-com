const express = require('express');

const blogsRoute = require('./blogs');
const tutorialsRoute = require('./tutorials');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response) => {
    response.render('layout', { pageTitle: 'CMJ', template: 'index' });
  });

  router.use('/blogs', blogsRoute(params));
  router.use('/tutorials', tutorialsRoute(params));

  return router;
};
