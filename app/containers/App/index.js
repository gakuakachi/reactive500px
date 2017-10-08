/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Main from 'containers/Main/Loadable'
import Upload from 'containers/Upload';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

//iclude layout
export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/featured/popular" component={Main} />
        <Route exact path="/featured/rated" component={Main} />
        <Route exact path="/featured/upcoming" component={Main} />
        <Route exact path="/featured/editor-picked" component={Main} />
        <Route exact path="/featured/fresh-today" component={Main} />
        <Route exact path="/featured/fresh-yesterday" component={Main} />
        <Route exact path="/featured/fresh-thisweek" component={Main} />
        <Route path="/upload" component={Upload} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
