import React, { Fragment } from 'react';
import { Row, Button } from 'react-bootstrap';

const CopyShareComponent = ({
  showbtns,
  copyText,
  text,
  copied,
  shared,
  shareText
}) => {
  return (
    <Fragment>
      {showbtns && (
        <Row className='p-2 justify-content-center'>
          <Button
            variant='secondary'
            type='submit'
            size='sm'
            disabled={copied}
            onClick={copyText}
          >
            {!copied ? 'Copy' : 'Copied!'}
          </Button>

          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              text
            )}`}
            data-action='share/whatsapp/share'
          >
            <Button
              className='ml-2'
              variant='success'
              type='submit'
              size='sm'
              disabled={shared}
              onClick={shareText}
            >
              {!shared ? 'Share to Whatsapp!' : 'Sharing...'}
            </Button>
          </a>
        </Row>
      )}
    </Fragment>
  );
};

export default CopyShareComponent;
