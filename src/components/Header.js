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

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar style={{zIndex: '1'}}>
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
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link to={'/nothing'}>
                  <span role="img" aria-label="📁">
                    📁
                  </span>
                  404
                </Link>
              </ListItem>
              <Divider />
              <ListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </ListItem>
            </List>
          )}
        </div>

        <TextField placeholder="Search..." width={150} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
