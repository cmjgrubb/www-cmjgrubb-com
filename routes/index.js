const express = require('express');

const gettingstartedRoute = require('./gettingstarted');
const peptalkRoute = require('./peptalk');
const smallpotatoesRoute = require('./smallpotatoes');
const awsRoute = require('./aws');
const gitRoute = require('./git');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'CMJ' });
  });

  router.use('/gettingstarted', gettingstartedRoute());
  router.use('/peptalk', peptalkRoute());
  router.use('/smallpotatoes', smallpotatoesRoute());
  router.use('/aws', awsRoute());
  router.use('/git', gitRoute());

  return router;
};
