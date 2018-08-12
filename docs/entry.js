/* global document */

import React from 'react';
import { render } from 'react-dom';
import {
  createBrowserRouter,
  makeRouteConfig,
  Route,
} from 'found';

import App from './App';
import NotFound from '../src/index';

const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route
      path="/"
      Component={App}
    >
      <Route
        path="/404"
        Component={NotFound}
      />
    </Route>,
  ),
});


render(<BrowserRouter />, document.querySelector('#app'));
