import React, { useState, useEffect } from 'react';
import { Window, WindowContent, WindowHeader, Button, Toolbar } from 'react95';
import FilterResults from 'react-filter-search';

import { VscOctoface, VscGlobe } from 'react-icons/vsc';

import { Wrapper } from './UI.js';

import { getProjects } from '../api';

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
                  <p>{project.content}</p>
                </WindowContent>
                <WindowContent>
                  <span
                    style={{ display: 'flex', flexDirection: 'row-reverse' }}
                  >
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Button style={{ marginLeft: '1rem' }}>
                          <VscOctoface />
                          &nbsp;Github
                        </Button>
                      </a>
                    ) : (
                      ''
                    )}
                    {project.deploy ? (
                      <a href={project.deploy} target="_blank" rel="noreferrer">
                        <Button>
                          <VscGlobe />
                          &nbsp;Deploy
                        </Button>
                      </a>
                    ) : (
                      ''
                    )}
                  </span>
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
