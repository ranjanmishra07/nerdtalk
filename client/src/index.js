import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AuthComponent from './Components/AuthComponent/AuthComponent'
import LoginComponent from './Components/AuthComponent/LoginComponent'
import SignupComponent from './Components/AuthComponent/SignupComponent'

import HomeComponent from './Components/HomeComponent/HomeComponent'

import {Router, Route, IndexRoute, hashHistory} from 'react-router'

ReactDOM.render(
    <Router history={hashHistory}>
    	<Route path="/" component={App}>
    	<IndexRoute component={AuthComponent}></IndexRoute>
        	<Route path="auth" component={AuthComponent}>
    			<IndexRoute component={LoginComponent} />
    			<Route path="login" component={LoginComponent}></Route>
    			<Route path="signup" component={SignupComponent}></Route>
    		</Route>
        <Route path="home" component={HomeComponent}>
            <IndexRoute component={HomeComponent}></IndexRoute>
        </Route>
    	</Route>
    </Router>,
  document.getElementById('root')
);

registerServiceWorker();
