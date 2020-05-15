import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from '../../../component/layout';
import Home from '../router/home';

import './main.css';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { current: props.url };
  }

  tabClick(e) {
    console.log('click', e.target);
  }

  render() {
    return <Layout {...this.props}>
      <Home/>
    </Layout>;
  }
}

export default EASY_ENV_IS_DEV ? hot(Main) : Main;
