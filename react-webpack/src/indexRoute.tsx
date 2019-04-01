import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './routerTest/App';
import Users from './routerTest/Users';
import Contact from './routerTest/Contact';

const root = document.getElementById('RouteTest');

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );

ReactDOM.render(
    routing,
     root);