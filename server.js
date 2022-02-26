const express = require('express');
const path = require('path');
const routes = require('./routes');

const BlogService = require('./services/BlogService');
const TutorialService = require('./services/TutorialService');

const blogService = new BlogService('./data/blogs.json');
const tutorialService = new TutorialService('./data/tutorials.json');

const app = express();
const port = 3000;

// Enable Embedded JavaScript templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use(async (request, response, next) => {
  try {
    const titles = await blogService.getTitle();
    response.locals.blogTitle = titles;
    return next();
  } catch (err) {
    return next(err);
  }
});

app.use(
  '/',
  routes({
    blogService,
    tutorialService,
  })
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
