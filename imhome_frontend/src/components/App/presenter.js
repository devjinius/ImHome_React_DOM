import React from 'react';
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";
import styles from './styles.scss';
import Center from 'components/Center';
import Navigator from 'components/Navigator';
import SideBar from 'components/SideBar'

const App = props => [
  props.isLoggedIn ? <Navigator key={1} {...props}/> : null,
  props.isLoggedIn ? <SideBar key={2} /> : null,
  props.isLoggedIn ? <PrivateRoutes key={3} /> : <PublicRoutes key={3}/>,
]

const PrivateRoutes = props => (
  <Switch>
      <Route exact path="/" component = {Center} />
      <Route exact path="/explore" render={() => "explore"} />
  </Switch>
)

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => "login"} />
    <Route exact path="/register" render={() => "register"} />
  </Switch>
)

export default App;
