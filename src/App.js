import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div id="App">
        <Switch>
          <Route path={'/'} exact>
            <h1>Welcome Home</h1>
          </Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
