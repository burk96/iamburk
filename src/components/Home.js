import React, { useEffect, useState } from 'react';
import { Window, WindowContent, WindowHeader, Button, Toolbar } from 'react95';
import FilterResults from 'react-filter-search';

import { Wrapper } from './UI.js';

import { getPosts } from '../api';

const Home = (props) => {
  const { search } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getPosts();
      setPosts(result);
    })();
  }, []);

  return (
    <Wrapper id="Home">
      <FilterResults
        value={search}
        data={posts}
        renderResults={(posts) => {
          return posts.map((post, index) => {
            return (
              <Window className="window" key={index}>
                <WindowHeader className="window-header">
                  <span>{post.title}</span>
                  <Button>
                    <span className="close-icon">x</span>
                  </Button>
                </WindowHeader>
                <Toolbar>
                  <Button variant="menu" size="sm" disabled>
                    File
                  </Button>
                  <Button variant="menu" size="sm" disabled>
                    Edit
                  </Button>
                  <Button variant="menu" size="sm" disabled>
                    Save
                  </Button>
                </Toolbar>
                <WindowContent>
                  <p>{post.content}</p>
                </WindowContent>
              </Window>
            );
          });
        }}
      />
    </Wrapper>
  );
};

export default Home;
