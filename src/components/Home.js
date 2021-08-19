import React from 'react';
import styled from 'styled-components';
import { Window, WindowContent, WindowHeader, Button, Toolbar } from 'react95';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background: teal;
  height: 100vh;
  overflow: auto;
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
`;

const Home = () => {
  return (
    <Wrapper className="Home">
      <Window className="window">
        <WindowHeader className="window-header">
          <span>iamburk.exe</span>
          <Button>
            <span className="close-icon" />
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
          <p>This UI kit is crazy!</p>
          <p>Can't wait to expand my site!</p>
        </WindowContent>
      </Window>
    </Wrapper>
  );
};

export default Home;
