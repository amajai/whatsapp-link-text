import React, { Fragment } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const OutputField = ({ loading, data }) => {
  if (loading) {
    return (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <Fragment>
        {data && (
          <textarea
            name='outputfield'
            id='outputfield'
            cols='70'
            rows='10'
            value={data}
            readOnly
            style={{ resize: 'none', fontSize: '13px' }}
          ></textarea>
        )}
      </Fragment>
    );
  }
};

export default OutputField;
