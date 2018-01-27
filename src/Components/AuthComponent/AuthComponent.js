import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import {hashHistory} from 'react-router'

import {firebaseAuth, GithubProvider, GoogleProvider} from '../../firebaseConfig'

import {connect} from 'react-redux'
import {Link} from 'react-router'
import {styles} from './styles'

class AuthComponent extends Component {
  constructor(props) {
    super(props)
    this.oAuthLogin = this.oAuthLogin.bind(this)
  }

    oAuthLogin(provider) {
      firebaseAuth.signInWithPopup(provider == 'github' ? GithubProvider : GoogleProvider)
      .then(function(result) {
        console.log(result)
        hashHistory.push('/home')
      })
      .catch(function(error) {
        console.log(error)
      })
    }

    componentWillMount() {
      var x = this
      firebaseAuth.onAuthStateChanged(function(user) {
        if(user){
          console.log(user)
          const {dispatch} = x.props
          dispatch({type: 'SUCCESS_LOGIN', user})
          hashHistory.push('/home')  
        }
      })
    }

  render() {
    return (
      <div className='flex-row' style={{marginTop: 12+"%" }}>
        <Paper zDepth={4} style={styles.paper}>
          <div className='flex-col'>
        	<h1 style={styles.h1}>NerdTalk</h1>

  		      <div style={{width: '120%'}}>

			        <a onClick={() => this.oAuthLogin('google')} className="btn btn-block btn-social btn-google"style={{margin: '20px 0px',textAlign:'center'}}>
	              <span className="fa fa-google"></span>Login via Gmail
	            </a>

	            <a onClick={() => this.oAuthLogin('github')} className="btn btn-block btn-social btn-github"  style={{textAlign:'center'}}>
	              <span className="fa fa-github"></span>Login via Github

	            </a>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {user} = state.userReducer

  return {
    user
  }

}

export default connect(mapStateToProps)(AuthComponent);
