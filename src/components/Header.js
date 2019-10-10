import React from 'react';
import Row from 'react-bootstrap/Row';

const Header = () => {
  return (
    <Row className='justify-content-center'>
      <div className='a text-center'>
        <h1>Link-to-ChatText</h1>
        <p>An app that converts link into sharable chat text</p>
      </div>
    </Row>
  );
};

export default Header;
