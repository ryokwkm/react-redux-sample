import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

import configureStore from './store/configurte-store';

import App from './compornents/App';
import About from './compornents/About';


const store = configureStore();

const render = () => {
  // const state = store.getState();
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div className="app">
          <ul className="left-navi">
            <li><Link to="/">Top</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>,
    document.querySelector('#root'),
    );
};

render();
