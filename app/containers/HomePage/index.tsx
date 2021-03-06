/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';

import Button from 'components/Button';

interface Props {
  readonly history: any;
}
const HomePage = ({ history }: Props) => (
  <Button onClick={() => history.push('/req-parts')}>
    New Request
  </Button>
);
export default HomePage;
