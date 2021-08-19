const { Client } = require(`pg`);
const DB_NAME = 'iamburk';
const DB_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;

const client = new Client(DB_URL);

async function getPosts() {
  try {
    const { rows } = await client.query(
      `
        SELECT * FROM posts
      `
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function createPost({ title, content }) {
  try {
    const {
      rows: [post],
    } = await client.query(
      `
        INSERT INTO posts(title, content)
        VALUES($1, $2)
        RETURNING *;
      `,
      [title, content]
    );

    return post;
  } catch (error) {
    throw error;
  }
}

async function getProjects() {
  try {
    const { rows } = await client.query(
      `
        SELECT * FROM projects
      `
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function createProject({ title, content, deploy, github }) {
  try {
    const {
      rows: [project],
    } = await client.query(
      `
        INSERT INTO projects(title, content, deploy, github)
        VALUES($1, $2, $3, $4)
        RETURNING *;
      `,
      [title, content, deploy, github]
    );

    return project;
  } catch (error) {
    throw error;
  }
}

module.exports = { client, getPosts, createPost, getProjects, createProject };
