
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStore} from 'redux';
import AllReducer from './Reducers/index';
import App from './Components/app';
import {Provider} from 'react-redux';

const store = createStore(AllReducer);

export default class DemoRedux extends Component {
  render() {
    return (
      <Provider store={store}>
       <App/>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('DemoRedux', () => DemoRedux);
