export async function getPosts() {
  // Faked for now 🤷‍♀️
  const posts = [
    {
      title: 'iamburk.exe',
      content: "This UI kit is crazy! Can't wait to expand my site!",
    },
    {
      title: 'More dummy data',
      content: 'And the search bar works! Wow!',
    },
  ];

  return posts;
}

export async function getProjects() {
  // Faked for now 🤷‍♀️
  const projects = [
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

  return projects;
}
