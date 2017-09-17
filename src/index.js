import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';

let store = createStore(todoApp, 
                        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                      );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
