import React from 'react';
import { AppBar, Toolbar, Button } from 'react95';

const Footer = () => {
  return (
    <AppBar style={{ zIndex: '1', position: 'static' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button variant="menu" size="sm">
            <a
              href="https://github.com/burk96/iamburk"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
