import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import './assets/style.scss';

import App from './containers/App';
import Login from './containers/Login';
import Home from './containers/Home';
import About from './components/About';
import Article from './containers/Article';
import configureStore from './store/configureStore';
import { getArticlesList } from './actions/HomeActions';
import { checkLogin } from './actions/LogRegActions';

const store = configureStore();

store.dispatch(
  getArticlesList(),
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="article/:id" component={Article} />
        <Route path="about" component={About} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
