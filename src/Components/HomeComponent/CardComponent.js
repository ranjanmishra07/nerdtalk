import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// import {client} from '../../Services/StreamService'

const CardComponent = () => (
  <Card style={{marginBottom: 10, borderRadius: 0}}>
    <CardHeader
      title="Full Name"
      subtitle="Email"
      avatar="https://s.hswstatic.com/gif/fullmoon-sleep-1200x800.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Post title" subtitle="Post subtitle" />}
    >
      <img src="https://s.hswstatic.com/gif/fullmoon-sleep-1200x800.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default CardComponent;
