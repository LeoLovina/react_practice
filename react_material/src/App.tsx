import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SignIn from './Login';

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

      <SignIn></SignIn>
    </div>
  );
}

export default App;
