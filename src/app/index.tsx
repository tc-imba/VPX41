import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
import { Main } from 'app/containers/Main';
// import { TodoApp } from 'app/containers/TodoApp';

// render react DOM
export const App = hot(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </Root>
));
