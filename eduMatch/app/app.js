import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './views/Login.js';
import secured from './views/Secured.js';

export default class app extends Component {
  state = {
    isLoggedIn: false
  }
  render() {

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
