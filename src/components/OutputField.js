import React from 'react';

const OutputField = () => {
  return (
    <div>
      <textarea
        name='outputfield'
        id='outputfield'
        cols='30'
        rows='10'
        value='56'
        readOnly
        style={{ resize: 'none' }}
      ></textarea>
    </div>
  );
};

export default OutputField;
