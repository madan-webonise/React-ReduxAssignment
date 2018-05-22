import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './AppComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppComponent />, document.getElementById('root'));

registerServiceWorker();
