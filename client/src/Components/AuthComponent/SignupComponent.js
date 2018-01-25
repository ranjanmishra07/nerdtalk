import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

import {Link} from 'react-router'

import {styles} from './styles'

class SignupComponent extends Component {
  render() {
    return (
      <div className='flex-col'>
        <h1 style={{marginTop: 0}}>Signup</h1>

          <form className='flex-col'>
            <TextField
              hintText="Name"
            />
            <TextField
              hintText="Email"
            />
            <TextField
              hintText="Password"
            />
            <RaisedButton
              label="Signup"
              primary={true}
              type="submit"
              style={{width: '50%', margin: 20}}
            />
          </form>

          <Link to="/auth/login"><p style={{textAlign: 'center'}}>Already have an account? <br />Login Here
          </p></Link>

      </div>
    );
  }
}

export default SignupComponent;
