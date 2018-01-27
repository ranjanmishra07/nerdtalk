import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import {hashHistory} from 'react-router'
import {firebaseAuth} from '../../firebaseConfig'

import {connect} from 'react-redux'

class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Paper className="flex-col" zDepth={2} style={{minHeight: 100, borderRadius: 0, maxWidth: 20+'em', padding: 10, textAlign: 'center'}}>

          <img src={this.props.user && this.props.user.photoURL} style={{width: 7+'em', height: 7+'em', borderRadius: '50%'}}/>

          <h4>{this.props.user && this.props.user.displayName}</h4>
          <h5 style={{color: 'grey'}}>{this.props.user && this.props.user.email}</h5>

          <span style={{margin: 10, borderBottom: '1px solid lightgrey', width: '100%'}}></span>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  const {user} = state.userReducer
  return {
    user
  }
}

export default connect(mapStateToProps)(ProfileContainer);