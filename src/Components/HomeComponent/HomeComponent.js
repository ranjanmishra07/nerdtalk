import React, { Component } from 'react';
import {hashHistory} from 'react-router'
import {firebaseAuth} from '../../firebaseConfig'
import {connect} from 'react-redux'

import CardComponent from './CardComponent'
import ProfileContainer from './ProfileContainer'
import NotificationsContainer from './NotificationsContainer'
import NewPostContainer from './NewPostContainer'

class HomeComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    var scope = this;
    firebaseAuth.onAuthStateChanged(function(user) {
      if(user) {
        var token = user.getToken()
        const {dispatch} = scope.props
        dispatch({type: 'SUCCESS_LOGIN', user})
        dispatch({type: 'TOKEN', token})
      }
      else
        hashHistory.push('/auth')
    })
  }

  render() {
    return (
      <div className='flex-row' style={{margin: 1+"%", justifyContent: 'flex-start'}}>
        
        <div style={{width: '30%', position: 'fixed', left: 40}} className="mobile-hide">
          <ProfileContainer />
        </div>
        
        <div className='feedContainer'>
          <NewPostContainer />

          <CardComponent />

          <CardComponent />
        </div>

        <div style={{position: 'fixed'}} className="mobile-hide notificationsContainer">
          <NotificationsContainer />
        </div>

      </div>
    );
  }
}

export default connect()(HomeComponent);
