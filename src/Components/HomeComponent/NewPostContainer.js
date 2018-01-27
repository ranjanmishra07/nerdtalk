import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import UploadPhotoIcon from 'material-ui/svg-icons/image/add-a-photo'

import axios from 'axios'

class NewPostContainer extends Component {
  constructor(props) {
    super(props)
    this.onEditorStateChange = this.onEditorStateChange.bind(this)
    this.post = this.post.bind(this)

    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
    });
  };

  post() {
    alert(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())))
  }

  render() {
    const { editorState } = this.state;
    return (
      <Card style={{marginBottom: 10, borderRadius: 0}}>
        
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="rteWrapper"
          editorClassName="rteEditor"
          editorStyle={{height: 100}}
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
              colorPicker: { className: 'hidden' },
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              embedded: { className: 'hidden' }
            }}
        />
        <CardActions>
          <RaisedButton backgroundColor={'#EEEEEE'} icon={<UploadPhotoIcon />} label="Photo / Video" />
          <RaisedButton style={{float: 'right'}} primary={true} label="POST" onClick={this.post}/>
        </CardActions>
      </Card>
    );
  }
}

export default NewPostContainer;
