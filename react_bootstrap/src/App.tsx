import React from 'react';
// import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Home from './components/Home';
import User from './components/User';
import Contact from './components/Contact';
import UserDetail from './components/UserDetail';
class App extends React.Component {
  public render() {
    return (
      <Router>
      <div>
        <Route exact={true} path="/" component = {Home} />
        <Route path="/User" component= {User}/>
        <Route path="/user/:id" component={UserDetail} />
        <Route path="/Contact">
          <Contact id={1} name={'haha'} />
          </Route>
      </div>
    </Router>
    );
  }
}

export default App;
