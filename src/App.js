import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset } from 'react95';
import themes from 'react95/dist/themes';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import { Header, Home, FourOhFour, Projects } from './components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const App = () => {
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState(themes.original);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      setTheme(themes[storedTheme]);
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header search={search} setSearch={setSearch} setTheme={setTheme} />
        <div
          style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}
        >
          <Switch>
            <Route path={'/projects'} exact>
              <Projects search={search} />
            </Route>
            <Route path={'/'} exact>
              <Home search={search} />
            </Route>
            <Route>
              <FourOhFour />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
