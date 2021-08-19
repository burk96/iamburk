import React from 'react';
import { AppBar, Toolbar, Button } from 'react95';

const Footer = () => {
  return (
    <AppBar style={{ zIndex: '1', position: 'static' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <a
            href="https://github.com/burk96/iamburk"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="menu" size="sm">
              Github
            </Button>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
