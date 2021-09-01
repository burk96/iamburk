import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider,
} from 'react95';
import { VscOctoface } from 'react-icons/vsc';
import ThemeChooser from './ThemeChooser';

const Header = (props) => {
  const { search, setSearch, setTheme } = props;
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AppBar style={{ zIndex: '3' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: 'bold' }}
            >
              <span role="img" aria-label="😀">
                😀
              </span>
              Start
            </Button>
            {open && (
              <List
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '100%',
                }}
                onClick={() => setOpen(false)}
              >
                <ListItem>
                  <Link to={'/'}>
                    <span role="img" aria-label="🏠">
                      🏠
                    </span>
                    &nbsp;Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/projects'}>
                    <span role="img" aria-label="📁">
                      📁
                    </span>
                    &nbsp;Projects
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/nothing'}>
                    <span role="img" aria-label="❓">
                      ❓
                    </span>
                    &nbsp;404
                  </Link>
                </ListItem>
                <Divider />
                <ListItem>
                  {/* TODO: Make button less buttony */}
                  <Button
                    variant="menu"
                    style={{ padding: '0' }}
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    <span role="img" aria-label="🎨">
                      🎨
                    </span>
                    &nbsp;Themes
                  </Button>
                </ListItem>
                <ListItem>
                  <a
                    href="https://github.com/burk96/iamburk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <VscOctoface />
                    &nbsp;Github
                  </a>
                </ListItem>
              </List>
            )}
          </div>

          <TextField
            placeholder="Search..."
            width={150}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Toolbar>
      </AppBar>
      <ThemeChooser
        setTheme={setTheme}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};

export default Header;
