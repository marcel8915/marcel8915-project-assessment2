/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import RequestPage from 'containers/RequestPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Container from 'components/Container';

import GlobalStyle from '../../global-styles';
export default function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/req-parts" component={RequestPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Container>
  );
}
