import React, { Component } from 'react';
import CardComponent from './CardComponent'


class HomeComponent extends Component {
  constructor(props) {
    super(props)
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
