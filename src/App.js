import React, { Fragment } from 'react';
import Header from './components/Header';
import OutputField from './components/OutputField';
import LinkInput from './components/LinkInput';
import Form from 'react-bootstrap/Form';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Form>
        <LinkInput />
      </Form>
      <OutputField />
    </Fragment>
  );
}

export default App;
