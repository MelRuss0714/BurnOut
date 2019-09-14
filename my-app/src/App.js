import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

//import components

import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Game from './components/Game/Game.js';
import Profile from './components/Profile/Profile';
import Research from './components/Research/Research';


//ProtectedRoute does not work
const ProtectedRoute = (props) => {
  // props: path & component

  const isAuthenticated = false;
  if (isAuthenticated === true) {
    return <Route path={props.path} component={props.component} />
  }
  return <Redirect to='/' />

}
const isAuthenticated = false;
const PrivateRoute = ({ component: Component, path: url }) => (

  <Route path={url} render={(props) => (
    isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/game' component={Game} />
        <Route exact path='/research' component={Research} />

      </div>
    );
  }
}

export default App;
