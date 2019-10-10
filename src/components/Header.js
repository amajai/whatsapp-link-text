import React from 'react';
import Row from 'react-bootstrap/Row';
import appLogo from '../images/wltt-logo.png';
const Header = () => {
  return (
    <Row className='justify-content-center'>
      <div className='text-center mt-4'>
        <img src={appLogo} alt='app-logo' width='150px' />
        <h2>Link-to-ChatText</h2>
        <p>
          An app that converts article link into sharable chat text with article
          summary and link
        </p>
      </div>
    </Row>
  );
};

export default Header;