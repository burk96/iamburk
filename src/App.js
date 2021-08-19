import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import { Header, Home, FourOhFour, Footer } from './components';

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
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <div
          id="App"
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
          }}
        >
          <Header />
          <Switch>
            <Route path={'/'} exact>
              <Home />
            </Route>
            <Route>
              <FourOhFour />
            </Route>
          </Switch>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
