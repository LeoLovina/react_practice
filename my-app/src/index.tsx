import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import HelloMessage from './myApp';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

ReactDOM.render(
  <HelloMessage />,
  document.getElementById('myApp') as HTMLElement
);

registerServiceWorker();
