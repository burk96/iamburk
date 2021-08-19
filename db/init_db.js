const { client, createPost, createProject } = require('./index.js');

async function buildTables() {
  try {
    await client.connect();

    await client.query(`
        DROP TABLE IF EXISTS posts;
        DROP TABLE IF EXISTS projects;
    `);

    await client.query(`
        CREATE TABLE posts(
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT
        );

        CREATE TABLE projects(
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT,
            deploy TEXT,
            github TEXT
        );
    `);
  } catch (error) {
    throw error;
  }
}

async function initializePosts() {
  const initialPosts = [
    {
      title: 'iamburk.exe',
      content: "This UI kit is crazy! Can't wait to expand my site!",
    },
    {
      title: 'More dummy data',
      content: 'And the search bar works! Wow!',
    },
  ];

  await Promise.all(initialPosts.map(createPost));
}

async function initializeProjects() {
  const initialProjects = [
    {
      title: 'Grace Shopper',
      content: 'Gnarly project man!',
      deploy: 'https://morning-brushlands-06268.herokuapp.com',
      github: 'https://github.com/Four-Butterflies/grace-shopper',
    },
    {
      title: 'Snake.jssss',
      content: 'A simple snake game built in JQuery',
      deploy: 'https://snakejssss.netlify.app/',
      github: 'https://github.com/burk96/arcade-game',
    },
  ];

  await Promise.all(initialProjects.map(createProject));
}

buildTables()
  .then(initializePosts)
  .then(initializeProjects)
  .catch(console.error)
  .finally(() => client.end());
