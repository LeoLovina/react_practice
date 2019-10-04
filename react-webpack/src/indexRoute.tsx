import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './routerTest/App';
import Users from './routerTest/Users';
import Contact from './routerTest/Contact';
import Notfount from './routerTest/Notfound';

const root = document.getElementById('RouteTest');

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users/1">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users/:id" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfount} />
      </Switch>
    </div>
  </Router>
  // <div>
  //   <h1> React Route </h1>
  //   <Router>
  //     <div>
  //       <Route path="/" component={App} />
  //       <Route path="/users" component={Users} />
  //       <Route path="/contact" component={Contact} />
  //     </div>
  //   </Router>
  // </div>
);

ReactDOM.render(
  routing,
  root);