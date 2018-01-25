import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

import {Link} from 'react-router'

import {styles} from './styles'

class LoginComponent extends Component {
  render() {
    return (
      <div className='flex-col'>
        <h1 style={{marginTop: 0}}>Login</h1>

          <div className='flex-row' style={{width: '100%', margin: 10, justifyContent: 'space-between'}}>
            <a class="btn btn-social btn-google">
              <span class="fa fa-google"></span>Gmail
            </a>

            <a class="btn btn-social btn-github">
              <span class="fa fa-github"></span>Github
            </a> 
          </div>
          <p> OR </p>
          <form className='flex-col'>
            <TextField
              hintText="Email"
            />
            <TextField
              hintText="Password"
            />
            <Link style={{alignSelf: 'flex-end', fontSize: 12, textDecoration: 'underline', marginTop : 0}}>Forgot Password? </Link>
            <RaisedButton
              label="Login"
              primary={true}
              type="submit"
              style={{width: '50%', margin: 20}}
            />
          </form>

          <Link to="/auth/signup"><p style={{textAlign: 'center'}}>Don't have an account yet? <br />Signup Here
          </p></Link>

      </div>
    );
  }
}

export default LoginComponent;
