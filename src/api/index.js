export async function getPosts() {
  const data = await (await fetch('/api/posts')).json();

  return data;
}

export async function getProjects() {
  const data = await (await fetch('/api/projects')).json();

  return data;
}
