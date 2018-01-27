import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import {hashHistory} from 'react-router'
import {firebaseAuth} from '../../firebaseConfig'

import {connect} from 'react-redux'

class NotificationsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Paper className="flex-col" zDepth={2} style={{height: 400, borderRadius: 0}}>

        <List style={{width: '100%', height: 400, overflowY: 'scroll'}}>
          <ListItem
            primaryText="Bleh followed you"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
          <ListItem
            primaryText="Blah liked your picture"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
          <ListItem
            primaryText="Bleh followed you"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
          <ListItem
            primaryText="Bleh followed you"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
          <ListItem
            primaryText="Blah liked your picture"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
          <ListItem
            primaryText="Bleh followed you"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
          <ListItem
            primaryText="Bleh followed you"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
          <ListItem
            primaryText="Blah liked your picture"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
          <ListItem
            primaryText="Bleh followed you"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
          <ListItem
            primaryText="Bleh followed you"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
          <ListItem
            primaryText="Blah liked your picture"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
          <ListItem
            primaryText="Bleh followed you"
            leftAvatar={<Avatar src={this.props.user && this.props.user.photoURL} />}
          />
        </List>

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

export default connect(mapStateToProps)(NotificationsContainer);