import React, { Component } from 'react';
import {hashHistory} from 'react-router'
import {firebaseAuth} from '../../firebaseConfig'
import {connect} from 'react-redux'

import CardComponent from './CardComponent'
import ProfileContainer from './ProfileContainer'
import NotificationsContainer from './NotificationsContainer'

class HomeComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    var scope = this;
    firebaseAuth.onAuthStateChanged(function(user) {
      if(user) {
        const {dispatch} = scope.props
        dispatch({type: 'SUCCESS_LOGIN', user})
      }
      else
        hashHistory.push('/auth')
    })
  }

  render() {
    return (
      <div className='flex-row' style={{margin: 1+"%", justifyContent: 'flex-start'}}>
        <div style={{width: 20+'em', position: 'fixed', left: 40}} className="mobile-hide">
          <ProfileContainer />
        </div>

        <div className='feedContainer'>
          <CardComponent />

          <CardComponent />
        </div>

        <div style={{width: 20+'em', position: 'fixed', right: 40}} className="mobile-hide">
          <NotificationsContainer />
        </div>

      </div>
    );
  }
}

export default connect()(HomeComponent);
