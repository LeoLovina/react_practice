import * as React from "react";
import * as ReactDOM from "react-dom";

import  Hello  from "./components/Hello";
//import  ModA  from "./modules/a/modA";


ReactDOM.render(
    // <Hello compiler="TypeScript" framework="React" />, document.getElementById("example")
    <div>
        <Hello />  
    </div>,
     document.getElementById("example")

);