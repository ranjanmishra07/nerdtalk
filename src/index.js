import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {store} from './store'
import {Provider} from 'react-redux'

import AuthComponent from './Components/AuthComponent/AuthComponent'

import HomeComponent from './Components/HomeComponent/HomeComponent'

import {Router, Route, IndexRoute, hashHistory} from 'react-router'

ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
    	<Route path="/" component={App}>
    	<IndexRoute component={AuthComponent}></IndexRoute>
       	<Route path="auth" component={AuthComponent} />
        <Route path="home" component={HomeComponent}>
            <IndexRoute component={HomeComponent}></IndexRoute>
        </Route>
    	</Route>
    </Router>
    </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
