import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Window, WindowContent, WindowHeader, Button, Toolbar } from 'react95';
import FilterResults from 'react-filter-search';

import { getProjects } from '../api';

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
    font-weight: bold;
  }
  .window {
    width: 100%;
    min-height: 200px;
    flex-grow: 0;
    margin-bottom: 2rem;
  }

  @media (min-width: 960px) {
    flex-flow: row wrap;
    align-items: flex-start;
    .window {
      width: 480px;
      min-height: 200px;
      margin: 2rem;
    }
  }
`;

const Projects = (props) => {
  const { search } = props;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getProjects();
      setProjects(result);
    })();
  }, []);

  return (
    <Wrapper id="projects">
      <FilterResults
        value={search}
        data={projects}
        renderResults={(projects) => {
          return projects.map((project, index) => {
            return (
              <Window className="window" key={index}>
                <WindowHeader className="window-header">
                  <span>{project.title}</span>
                  <Button>
                    <span className="close-icon">x</span>
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
                  <p>{project.content}</p>
                </WindowContent>
              </Window>
            );
          });
        }}
      />
    </Wrapper>
  );
};

export default Projects;
