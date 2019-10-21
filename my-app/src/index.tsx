import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import User from './components/User';
import Contact from './components/Contact';
import UserDetail from './components/UserDetail';

const routing = (
  <Router>
    <div>
      <Route exact={true} path="/" component = {Home} />
      <Route path="/User" component= {User}/>
      <Route path="/Contact" component= {Contact}/>
      <Route path="/user/:id" component={UserDetail} />
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
