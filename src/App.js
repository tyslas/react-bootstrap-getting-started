import React from 'react';
import 'bootstrap/less/bootstrap.less'
import Button from 'react-bootstrap/lib/Button';

React.render(<Button
  bsStyle='success'
  bsSize='large' >Hello Bootstrappers</Button>, document.getElementById('app'));
