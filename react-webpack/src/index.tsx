import * as React from "react";
import * as ReactDOM from "react-dom";

import  Hello  from "./components/Hello";
import  UserComponent  from "./components/UserComponent";
import  Welcome  from "./components/WelcomeComponent";

const root = document.getElementById('example');

ReactDOM.render(
    <div>
        <Hello />  
        <Hello defaultName="Mini" />  
        <img src="./src/images/mini.jpg" alt="mini"/>
        <UserComponent name="Leo" age={105} address="I don't know" dob={new Date()} />
        <Welcome defaultName="Monkey D"/>
    </div>,
     root);