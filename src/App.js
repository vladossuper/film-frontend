import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Films } from './pages/Films';
import { Details } from './pages/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Films />
        </Route>
        <Route path="/:film">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
