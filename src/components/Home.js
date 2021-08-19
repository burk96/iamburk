import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Window, WindowContent, WindowHeader, Button, Toolbar } from 'react95';
import FilterResults from 'react-filter-search';

import { getPosts } from '../api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  padding: 2rem;
  flex: 1;
  background: teal;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ___CSS_0___;
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 100%;
    min-height: 200px;
    flex-grow: 0;
    margin-bottom: 2rem;
  }
  @media (min-width: 960px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    .window {
      width: 480px;
      min-height: 200px;
      margin: 2rem;
    }
  }
`;

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
    <Wrapper className="Home">
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
                    <span className="close-icon">+</span>
                  </Button>
                </WindowHeader>
                <Toolbar>
                  <Button variant="menu" size="sm">
                    File
                  </Button>
                  <Button variant="menu" size="sm">
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
