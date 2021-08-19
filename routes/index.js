const apiRouter = require('express').Router();
const { getPosts, getProjects } = require('../db/index.js');

// GET
apiRouter.get('/posts', async (req, res) => {
  const results = await getPosts();

  res.send(results);
});

apiRouter.get('/projects', async (req, res) => {
  const results = await getProjects();

  res.send(results);
});

module.exports = apiRouter;
