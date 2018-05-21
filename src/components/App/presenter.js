import React from 'react';
import {Route, Switch} from "react-router-dom";
import styles from './styles.scss';
import Center from 'components/Center';
import Navigator from 'components/Navigator';

const App = props => [
  props.isLoggedIn ? <div className={styles.mainBody}><Navigator key={1} {...props} styles={styles}/><PrivateRoutes key={3} /></div> : <PrivateRoutes key={3} />,
  //props.isLoggedIn ? <PrivateRoutes key={3} /> : <PrivateRoutes key={3} />,
  // props.isLoggedIn ? <PrivateRoutes key={3} /> : <PublicRoutes key={3}/>,
]

const PrivateRoutes = props => (
  <Switch>
      <Route exact path="/" component = {Center} styles={styles}/>
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
