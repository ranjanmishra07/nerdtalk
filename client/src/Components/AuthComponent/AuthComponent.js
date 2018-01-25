import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

import {Link} from 'react-router'
import {styles} from './styles'

class AuthComponent extends Component {
  render() {
    return (
      <div className='flex-row' style={{marginTop: 12+"%" }}>
        <Paper zDepth={2} style={styles.paper}>
          <div className='flex-col'>
        	<h1 style={{marginTop: 0,fontFamily:'Raleway'}}>Login</h1>

		    <div style={{width: '120%'}}>
			    <a class="btn btn-block btn-social btn-google" style={{margin: '20px 0px'}}>
	              <span class="fa fa-google"></span>Login via Gmail
	            </a>

	            <a class="btn btn-block btn-social btn-github">
	              <span class="fa fa-github"></span>Login via Github
	            </a>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default AuthComponent;
