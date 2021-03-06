import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import configureStore from "./redux/store";

import ToDoApp from "./ToDoApp";

ReactDOM.render(<App />, document.getElementById('root'));

// const store = configureStore()
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <Provider store={store}>
//     <ToDoApp />
//   </Provider>,
//   rootElement
// );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
