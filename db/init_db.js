const { client, createPost, createProject } = require('./index.js');

const { initialPosts, initialProjects } = require('./initialData.json');

async function buildTables() {
  try {
    console.log('Rebuilding database');

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
  console.log('Intializing posts');
  await Promise.all(initialPosts.map(createPost));
}

async function initializeProjects() {
  console.log('Intializing projects');
  await Promise.all(initialProjects.map(createProject));
}

buildTables()
  .then(initializePosts)
  .then(initializeProjects)
  .catch(console.error)
  .finally(() => {
    console.log('Finished initializing database');
    client.end();
  });
