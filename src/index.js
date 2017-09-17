import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
