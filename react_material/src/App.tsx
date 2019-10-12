import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SignIn from './SignIn';
import LinkTo from './components/LinkToComponent/LinkTo';

const App: React.FC = () => {
  return (
    <div className="App">
      <Appar color="primary" position="static">
        <Toolbar>
          <Typography variant="caption" color="inherit">
            My Header
          </Typography>
        </Toolbar>
      </Appar>
      <LinkTo page="100" >news.kimo.com.tw</LinkTo>
      <SignIn></SignIn>
    </div>
  );
}

export default App;
