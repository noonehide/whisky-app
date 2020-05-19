import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Route from '../router/route';
import { hot } from 'react-hot-loader/root';
import Layout from '../../../component/layout'
import Login from './login/login';
import Home from './home/home';
import AppList from './app-list';

import { withRouter } from 'react-router'

@withRouter
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { current: props.url };
  }

  render() {
    return <Layout {...this.props}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/app-list" component={AppList} />
        <Route path="/" component={Login} />
      </Switch>
    </Layout>
  }
}

export default EASY_ENV_IS_DEV ? hot(Main) : Main;
