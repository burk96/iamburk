import axios from 'axios';

export async function getPosts() {
  const { data } = await axios.get('/api/posts');

  return data;
}

export async function getProjects() {
  const { data } = await axios.get('/api/projects');

  return data;
}
