import React, { Component } from 'react';
import Paper from 'material-ui/Paper'

import {styles} from './styles'

class AuthComponent extends Component {
  render() {
    return (
      <div className='flex-row' style={{marginTop: 20}}>
        <Paper zDepth={2} style={styles.paper}>
          <div>
          	{this.props.children}
          </div>
        </Paper>
      </div>
    );
  }
}

export default AuthComponent;
