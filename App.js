import React, { Component } from "react";
import Home from './screens/Home';
import Login from './screens/Login';
import Singup from './screens/singup';

export default class App extends Component{
  render(){
    return(
      <Home />
      // <Login />
      // <Singup />
    )
  }
}