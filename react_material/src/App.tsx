import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SignIn from './SignIn';
import LinkTo from './components/LinkToComponent/LinkTo';
import Downlink from './components/Download/Downlink';
import Base64Image from './components/Base64/Base64Image';
import UseStateTest from './components/UseState/UseStateTest';
import SwitchTest from './components/Material/SwitchTest';
import CardTest from './components/Material/CardTest';
import UseReduceTest from './components/UseReduce/UseReduceTest';
import UseEffectTest from './components/UseEffect/UseEffectTest';
import DialogTest from './components/Material/DialogTest';
import DndTest from './components/dnd//DndTest';
import MenuTest from './components/Menu/MenuTest';


const App: React.FC = () => {

  return (
    <div className="App">
      <MenuTest/>
    </div>
  );
}

export default App;
