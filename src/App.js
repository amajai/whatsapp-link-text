import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import OutputField from './components/OutputField';
import LinkInput from './components/LinkInput';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    loading: false,
    link: '',
    data: ''
  };

  sendLink = async link => {
    this.setState({ link: link });
    this.setState({ loading: true });
    const data = await axios({
      method: 'POST',
      url: '/send_link',
      baseURL: 'https://whatsapp-link-text-server.herokuapp.com',
      headers: { 'content-type': 'application/json' },
      data: { link: link }
    })
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    let text = `*${data.heading}*\n\n${data.summary}...\n\n*Read more:*\n${this.state.link}`;
    this.setState({ data: text, loading: false });
  };
  render() {
    return (
      <Fragment>
        <div className='container'>
          <Header />
          <LinkInput sendLink={this.sendLink} />
          <OutputField loading={this.state.loading} data={this.state.data} />
        </div>
      </Fragment>
    );
  }
}

export default App;
