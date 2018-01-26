import React, { Component } from 'react';
import CardComponent from './CardComponent'
import {hashHistory} from 'react-router'
import {firebaseAuth} from '../../firebaseConfig'

class HomeComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    firebaseAuth.onAuthStateChanged(function(user) {
      if(!user)
        hashHistory.push('/auth')
    })
  }

  render() {
    return (
      <div className='flex-row' style={{marginTop: 1+"%"}}>
        <div style={{width: 30+'em'}}>
          <CardComponent />
        </div>
      </div>
    );
  }
}

export default HomeComponent;
