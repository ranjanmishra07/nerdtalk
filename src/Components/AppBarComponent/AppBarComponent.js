import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'

class AppBarComponent extends Component {
  render() {
    return (
      <div>
        <AppBar
        	title="NerdTalk"
        	showMenuIconButton={false}
        />
      </div>
    );
  }
}

export default AppBarComponent;
