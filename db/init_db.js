const { client, createPost, createProject, createUser } = require('./index.js');

const { initialPosts, initialProjects } = require('./initialData.json');

async function buildTables() {
  try {
    console.log('Rebuilding database');

    await client.connect();

    await client.query(`
      DROP TABLE IF EXISTS posts;
      DROP TABLE IF EXISTS projects;
      DROP TABLE IF EXISTS users;
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
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

      CREATE TABLE users(
        uuid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        username VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        isadmin BOOLEAN DEFAULT false,
        roles TEXT[] DEFAULT '{}'
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

async function initializeUsers() {
  console.log('Intializing users');
  const initialUsers = [{ username: 'iamburk', password: 'nicetry' }];
  await Promise.all(initialUsers.map(createUser));
}

buildTables()
  .then(initializePosts)
  .then(initializeProjects)
  .then(initializeUsers)
  .catch(console.error)
  .finally(() => {
    console.log('Finished initializing database');
    client.end();
  });
