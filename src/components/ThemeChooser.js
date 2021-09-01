import React, { useState } from 'react';
import {
  Window,
  WindowHeader,
  WindowContent,
  Button,
  Toolbar,
  List,
  ListItem,
} from 'react95';
import themes from 'react95/dist/themes';

const ThemeChooser = (props) => {
  const { setTheme, modalOpen, setModalOpen } = props;
  const [open, setOpen] = useState(false);

  const chooseTheme = (selection) => {
    setTheme(themes[selection]);
    localStorage.setItem('theme', selection);
  };

  return (
    <div
      style={{
        display: `${modalOpen ? 'flex' : 'none'}`,
        zIndex: '1',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <Window
        className="window"
        style={{
          // maxHeight: '80%',
          width: '75%',
        }}
      >
        <WindowHeader
          className="window-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>Themes</span>
          {/* TODO: Make button less buttony */}
          <Button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <span className="close-icon">x</span>
          </Button>
        </WindowHeader>
        <Toolbar>
          <Button
            variant="menu"
            size="sm"
            onClick={() => {
              setOpen(!open);
            }}
          >
            File
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                top: '100%',
                zIndex: '4',
              }}
            >
              <ListItem>
                <Button
                  variant="menu"
                  onClick={() => {
                    chooseTheme('original');
                  }}
                >
                  Reset
                </Button>
              </ListItem>
            </List>
          )}
        </Toolbar>
        <WindowContent style={{ overflow: 'auto' }}>
          {Object.values(themes).map((theme) => {
            return (
              <Button
                onClick={() => {
                  chooseTheme(theme.name);
                }}
                key={theme.name}
                // TODO: Style buttons to match themes
                style={{
                  // ...theme,
                  marginLeft: '0.75rem',
                  marginBottom: '0.75rem',
                }}
              >
                {theme.name}
              </Button>
            );
          })}
        </WindowContent>
      </Window>
    </div>
  );
};

export default ThemeChooser;
