import React, { Fragment } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Row } from 'react-bootstrap';

const OutputField = ({ loading, data }) => {
  if (loading) {
    return (
      <div className='d-flex justify-content-center mt-5'>
        <Spinner animation='border' role='status' variant='success'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <Fragment>
        {data && (
          <Row className='justify-content-center'>
            <textarea
              name='outputfield'
              id='outputfield'
              cols='60'
              rows='10'
              value={data}
              readOnly
              style={{ resize: 'none', fontSize: '13px' }}
            ></textarea>
          </Row>
        )}
      </Fragment>
    );
  }
};

export default OutputField;
