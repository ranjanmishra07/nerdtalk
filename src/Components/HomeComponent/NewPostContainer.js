import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import UploadPhotoIcon from 'material-ui/svg-icons/image/add-a-photo'

class NewPostContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card style={{marginBottom: 10, borderRadius: 0}}>
        
        <CardText style={{backgroundColor: '#EEEEEE', minHeight: 120}}>
          WYSIWYG will come here
        </CardText>
        <CardActions>
          <RaisedButton backgroundColor={'#EEEEEE'} icon={<UploadPhotoIcon />} label="Photo / Video" />
          <RaisedButton style={{float: 'right'}} primary={true} label="POST" />
        </CardActions>
      </Card>
    );
  }
}

export default NewPostContainer;
