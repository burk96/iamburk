const { Client } = require('pg');
const bcrypt = require('bcrypt');
const DB_NAME = 'iamburk';
const DB_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;

const client = new Client(DB_URL);

// POSTS
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

// PROJECTS
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

// USERS
async function createUser({ username, password }) {
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO users(username, password)
        VALUES($1, $2)
        RETURNING username;
      `,
      [username, hashedPassword]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

async function loginUser({ username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT * FROM users
        WHERE username=$1;
      `,
      [username]
    );

    if (!user) {
      return false;
    }

    if (bcrypt.compareSync(password, user.password)) {
      delete user.password;
      return user;
    }

    return false;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  getPosts,
  createPost,
  getProjects,
  createProject,
  createUser,
  loginUser,
};
