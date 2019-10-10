import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, InputGroup, Button, Row } from 'react-bootstrap';

class LinkInput extends Component {
  state = {
    text: ''
  };
  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.sendLink(this.state.text);
    this.setState({ text: '' });
  };
  render() {
    return (
      <Form
        as={Row}
        onSubmit={this.onSubmit}
        className=' justify-content-center'
      >
        <Form.Group as={Col} md='8' controlId='validLink'>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id='inputGroupPrepend'>Link:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              onChange={this.onChange}
              type='url'
              placeholder='Add link here...'
              aria-describedby='inputGroupPrepend'
              required
              value={this.state.text}
            />
            <InputGroup.Prepend>
              <Button variant='success' type='submit'>
                Convert!
              </Button>
            </InputGroup.Prepend>
          </InputGroup>
        </Form.Group>
      </Form>
    );
  }
}

export default LinkInput;
