import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import OutputField from './components/OutputField';
import LinkInput from './components/LinkInput';
import CopyShareComponent from './components/CopyShareComponent';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    loading: false,
    link: '',
    data: '',
    copied: false
  };

  copyText = () => {
    this.setState({ copied: true });
    let copyText = document.querySelector('#outputfield');
    copyText.select();
    document.execCommand('copy');
    setTimeout(() => this.setState({ copied: false }), 3000);
  };

  sendLink = async link => {
    this.setState({ data: '' });
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
          <CopyShareComponent
            showbtns={this.state.data === '' ? false : true}
            copyText={this.copyText}
            text={this.state.data}
            copied={this.state.copied}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
