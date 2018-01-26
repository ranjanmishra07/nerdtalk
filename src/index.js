import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AuthComponent from './Components/AuthComponent/AuthComponent'

import HomeComponent from './Components/HomeComponent/HomeComponent'

import {Router, Route, IndexRoute, hashHistory} from 'react-router'

ReactDOM.render(
    <Router history={hashHistory}>
    	<Route path="/" component={App}>
    	<IndexRoute component={AuthComponent}></IndexRoute>
       	<Route path="auth" component={AuthComponent} />
        <Route path="home" component={HomeComponent}>
            <IndexRoute component={HomeComponent}></IndexRoute>
        </Route>
    	</Route>
    </Router>,
  document.getElementById('root')
);

registerServiceWorker();
