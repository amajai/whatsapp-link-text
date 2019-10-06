import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col, InputGroup, Button } from 'react-bootstrap';
const LinkInput = () => {
  return (
    <Form.Group as={Col} md='10' controlId='validLink'>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id='inputGroupPrepend'>https://</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type='url'
          placeholder='Add link here...'
          aria-describedby='inputGroupPrepend'
          required
        />
        <InputGroup.Prepend>
          <Button type='submit'>Convert!</Button>
        </InputGroup.Prepend>
      </InputGroup>
    </Form.Group>
  );
};

export default LinkInput;
