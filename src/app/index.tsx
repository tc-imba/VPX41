import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
import { Main } from 'app/containers/Main';
import { REPORT_STEP_URL, ReportStep } from 'app/constants/steps';
// import { TodoApp } from 'app/containers/TodoApp';

// render react DOM
export const App = hot(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path={REPORT_STEP_URL[ReportStep.MAIN]} component={Main} />
        <Route path={REPORT_STEP_URL[ReportStep.INTRODUCTION]} component={Main} />
        <Route path={REPORT_STEP_URL[ReportStep.DATA_SHEET]} component={Main} />
      </Switch>
    </Router>
  </Root>
));
