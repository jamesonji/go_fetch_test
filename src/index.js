import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import tasks from './reducers/tasks';
import users from './reducers/users';

import App from './components/App.js';
import Home from './components/Home.js';
import AllTasks from './components/AllTasks.js';

let store = createStore(
                        combineReducers({
                          tasks,
                          users,
                          routing: routerReducer
                        }), 
                        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                      );

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/tasks" component={AllTasks}/>
        </Route>
      </Router>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
